import os

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Course, Chef
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route('/login', methods=['POST'])
def login():
    
    username, password = request.json.get('username', None), request.json.get('password', None)
    if not (username and password):
        return jsonify({'message': 'Data not provided'}), 400
    
    # traer de mi base de datos un usuario por su email
    user = User.query.filter_by(email=username).one_or_none()
    if not user:
        return jsonify({'message': 'Username is not valid'}), 404

    #comprobar si la contraseña es correcta
    if not check_password_hash(user.password, password):
        return jsonify({'message': 'Your pass doesn"t match'}), 500

    token = create_access_token(identity=user.id)
    return jsonify({'token': token}), 200

@api.route('/signup', methods=["POST"])
def signUp():

    username, full_name, email, password, student_description, image  = request.json.get('username', None), request.json.get('full_name', None), request.json.get('email', None), request.json.get('password', None), request.json.get('student_description', None), request.json.get('image', None)

    if not (username and full_name and email and password):
        return jsonify({'message': 'Data not provided'}), 400

    passe = generate_password_hash(password)
    
    user = User(username = username, full_name=full_name, email=email, password=passe, student_description=student_description, image=image)
    try:

        db.session.add(user)
        userCreated = db.session.commit()
        token = create_access_token(identity=userCreated.id)
        return jsonify({'token': token}), 201

    except Exception as err:
        return jsonify({'message': str(err)}), 500

 # Authorization: Bearer <token> => si no viene 401
@api.route('/user', methods=['GET'])
@jwt_required()
def getUserInfo():

    userId = get_jwt_identity()
    user = User.query.filter_by(id=userId)
    return jsonify({"User": user.id}), 200

@api.route('/userinfo', methods=['GET'])
@jwt_required()
def getUser():

    userId = get_jwt_identity()
    user = User.query.filter_by(id=userId)
   
    userInfo_serialized = []
    for x in user:
        userInfo_serialized.append(x.serialize())
    return jsonify({"user": userInfo_serialized}), 200




@api.route('/course', methods=['GET'])
def get_course():
    course = Course.query.all()
    course_serialized = []
    for x in course:
        course_serialized.append(x.serialize())
    return jsonify({'results': course_serialized}), 200



@api.route('/coursebyid/<int:course_id>')
def get_course_by_id(course_id):
    course = Course.query.get(course_id)
    
    return jsonify({'results': course.serialize()}), 200


@api.route('/chefbyid/<int:chef_id>', methods=['GET'])
def get_chef_by_id(chef_id):
    chef = Chef.query.get(chef_id)
    
    return jsonify({'results': chef.serialize()}), 200



# @api.route('/newuser', methods=['POST'])
# def create_user():
#     body = request.get_json()
#     user = User(username=body['username'], email=body['email'], full_name=body['full_name'], password=body['password'], student_description=body['student_description'], facebook_url=body['facebook_url'], twitter_url=body['twitter_url'], linkedin_url=body['linkedin_url'], instagram_url=body['instagram_url'], image=body['image'])
#     db.session.add(user)
#     db.session.commit()
#     return jsonify({'response':user.serialize()}), 200

@api.route('/editstudent/', methods=['PUT'])
def user():
    body = request.get_json()
    user = User(username=body['username'], email=body['email'], full_name=body['full_name'], password=body['password'], student_description=body['student_description'], facebook_url=body['facebook_url'], twitter_url=body['twitter_url'], linkedin_url=body['linkedin_url'], instagram_url=body['instagram_url'], image=body['image'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'response':user.serialize()}), 200

@api.route('/newchef', methods=['POST'])
def create_chef():
    body = request.get_json()
    chef = Chef(address=body['address'], email=body['email'], full_name=body['full_name'], chef_description=body['chef_description'], bank_info=body['bank_info'])
    db.session.add(chef)
    db.session.commit()
    return jsonify({'response':chef.serialize()}), 200


@api.route('/newcourse', methods=['POST'])
def create_course():
    body = request.get_json()
    newcourse = Course(
        course_name=body['course_name'], 
        history=body['history'], 
        recipe=body['recipe'], 
        curiosity=body['curiosity'], 
        description=body['description'], 
        ingredient=body['ingredient'], 
        list_ingredient=body['list_ingredient'], 
       
        title=body['title'], 
        video=body['video'], 
        img=body['img'] 
        )

    db.session.add(newcourse)
    db.session.commit()
    return jsonify({'response':newcourse.serialize()}), 200


@api.route('/hello', methods=['GET'])
@jwt_required()
def get_my_information():
    
    username = get_jwt_identity()
        
    dictionary = {
        "message":"Your are Logged " 
    }
   
    return jsonify(dictionary)

@api.route('/deleteaccount', methods=['DELETE'])
@jwt_required()
def user_delete():
    
    userId = get_jwt_identity()
    if not userId:
        return jsonify({'Error':'User not found'}), 404
    user = User.query.filter_by(id=userId).one_or_none()
    print("user deleted", user)
    # user.delete()
    
    db.session.delete(user)
    db.session.commit()
    return jsonify('User deleted'), 200

@api.route('/user/course', methods=['GET'])
@jwt_required()
def course_user():
    
    id = get_jwt_identity()
    courses = User.query.filter_by(id=id).one_or_none()
    if courses:
        user_courses=courses.tags
        allcourses=[user_course.serialize() for user_course in  user_courses]
        print("respuesta backend", allcourses)
        return jsonify(allcourses), 200
    return ({'error':'No ha funcionado'}), 404

@api.route('/savecourseuser/<int:course_id>', methods=['POST'])
@jwt_required()
def save_course_user(course_id):

    id = get_jwt_identity()
    student = User.query.get(id)
    
    course = Course.query.get(course_id)
    if course not in student.tags:
        student.tags.append(course)
        db.session.add(course)
        db.session.commit()
        return jsonify({'response': True}),200

@api.route('/deletecourseuser/<int:course_id>', methods=['DELETE'])
@jwt_required()
def delete_course_user(course_id):

    id = get_jwt_identity()
    student = User.query.get(id)
    
    course = Course.query.get(course_id)
    
    student.tags.remove(course)
    
    db.session.commit()
    return jsonify({'response': True}),200
    
