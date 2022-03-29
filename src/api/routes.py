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
@api.route('/loginuser', methods=['POST'])
def loginuser():
    
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
    return jsonify({'tokenuser': token}), 200

@api.route('/loginchef', methods=['POST'])
def loginchef():
    
    email, password = request.json.get('username', None), request.json.get('password', None)
    if not (email and password):
        return jsonify({'message': 'Data not provided'}), 400
    
    # traer de mi base de datos un usuario por su email
    chef = Chef.query.filter_by(email=email).one_or_none()
    if not chef:
        return jsonify({'message': 'Email is not valid'}), 404

    #comprobar si la contraseña es correcta
    if not check_password_hash(chef.password, password):
        return jsonify({'message': 'Your pass doesn"t match'}), 500

    token = create_access_token(identity=chef.id)
    return jsonify({'tokenchef': token}), 200

@api.route('/signupuser', methods=["POST"])
def signUpUser():

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

@api.route('/signupchef', methods=["POST"])
def signUpChef():

    full_name, email, password, chef_description, image  =  request.json.get('full_name', None), request.json.get('email', None), request.json.get('password', None), request.json.get('chef_description', None), request.json.get('imagechef', None)

    if not (email and password):
        return jsonify({'message': 'Data not provided'}), 400

    passe = generate_password_hash(password)
    
    chef = Chef(email=email, password=passe, full_name=fullname, chef_description=student_description, imagechef=imagechef)
    try:

        db.session.add(chef)
        chefCreated = db.session.commit()
        token = create_access_token(identity=chefCreated.id)
        return jsonify({'tokenchef': token}), 201

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


@api.route('/chef', methods=['GET'])
def get_chef_by_id():
    chef = Chef.query.get()
    
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
    chef = Chef(password=body['password'], email=body['email'], full_name=body['full_name'], chef_description=body['chef_description'], imagechef=body['imagechef'])
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
        price=body['price'], 
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
    courses = Course.query.filter(Course.user_id == id)
    
    return ({'results':[course.serialize() for course in courses]})

#@api.route('/chef', methods=['GET'])
# def get_chef():
#     chef = Chef.query.all()
#     chef_serialized = []
#     for y in chef:
#         chef_serialized.append(y.serialize())
#     return jsonify({'results': chef_serialized}), 200

#login
# @api.route('/login', methods=['POST'])
# def login():
#     username, password = request.json.get(
#         'username', None
#     ), request.json.get(
#         'password', None
#     )
#     if not (username and password):
#         return jsonify({'message':'Data not provided'}), 400

#     #TRAER DE MI BASE DE DATOS UN USUARIO POR EMAIL

#     user = Student.query.filter_by(email = username)

#     if not user:
#         return jsonify({'message': 'Username is not valid'}), 404

#     #comprobar si la contraseña es correcta    

#     if not check_password_hash(user.password, password):
#         return jsonify({'message':'Your password does not match'}), 500

#     token = create_access_token(identity=user.id)
#     return jsonify({'token': token}), 200
    
# @api.route('/signup', methods=['POST'])
# def sign_up():

#     email, full_name, username, password = request.json.get('email', None), request.json.get('full_name', None), request.json.get('nick_name', None), request.json.get('password', None)

#     if not (email and full_name and username and password):
#         return jsonify({'message':'Data not provided'}), 400

#     passe = generate_password_hash(password) 
#     user = Student(email=email, full_name=full_name, username=username, password = passe)   

#     try:

#         db.session.add(user)
#         userCreated = db.session.commit()
#         token = create_access_token(identity=userCreated.id)
#         return jsonify({'token': token}), 201

#     except Exception as err:
#         return jsonify({'message': str(err)}), 500



