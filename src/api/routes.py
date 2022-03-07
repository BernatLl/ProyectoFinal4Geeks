import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Course, Chef, Student
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


   
@api.route('/hello', methods=['GET'])
@jwt_required()
def get_my_information():
    
    email = get_jwt_identity()
    
    dictionary = {
        "message":"Your are Logged " + email
    }
   
    return jsonify(dictionary)


@api.route('/course', methods=['GET'])
def get_course():
    course = Course.query.all()
    course_serialized = []
    for x in course:
        course_serialized.append(x.serialize())
    return jsonify({'results': course_serialized}), 200

# 

@api.route('/student/<int:id>', methods=['GET'])
def get_student_by_id(id):
    student = Student.query.get(id)
    
    return jsonify({'results': student.serialize()}), 200

@api.route('/chef/<int:id>', methods=['GET'])
def get_chef_by_id(id):
    chef = Chef.query.get(id)
    
    return jsonify({'results': chef.serialize()}), 200



@api.route('/newstudent', methods=['POST'])
def create_student():
    body = request.get_json()
    student = Student(username=body['username'], email=body['email'], full_name=body['full_name'], password=body['password'], student_description=body['student_description'], facebook_url=body['facebook_url'], twitter_url=body['twitter_url'], linkedin_url=body['linkedin_url'], instagram_url=body['instagram_url'])
    db.session.add(student)
    db.session.commit()
    return jsonify({'response':student.serialize()}), 200

@api.route('/editstudent/<int:id>', methods=['PUT'])
def edit_student(id):
    body = request.get_json()
    student = Student(username=body['username'], email=body['email'], full_name=body['full_name'], password=body['password'], student_description=body['student_description'], facebook_url=body['facebook_url'], twitter_url=body['twitter_url'], linkedin_url=body['linkedin_url'], instagram_url=body['instagram_url'])
    db.session.add(student)
    db.session.commit()
    return jsonify({'response':student.serialize()}), 200

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
        dificulty=body['dificulty'], 
        style=body['style'], 
        country=body['country'], 
        description=body['description'], 
        ingredient=body['ingredient'], 
        list_ingredient=body['list_ingredient'], 
        requeriments=body['requeriments'], 
        knowledge=body['knowledge'], 
        price=body['price'], 
        title=body['title'], 
        video=body['video'], 
        img=body['img'] 
        )

    db.session.add(newcourse)
    db.session.commit()
    return jsonify({'response':newcourse.serialize()}), 200

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



