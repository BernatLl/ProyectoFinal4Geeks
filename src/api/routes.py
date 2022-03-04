"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Course, Chef, Student
from api.utils import generate_sitemap, APIException
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

api.config["JWT_SECRET_KEY"] = ""
jwt = JWTManager(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/course', methods=['GET'])
def get_course():
    course = Course.query.all()
    course_serialized = []
    for x in course:
        course_serialized.append(x.serialize())
    return jsonify({'results': course_serialized}), 200

@api.route('/chef', methods=['GET'])
def get_chef():
    chef = Chef.query.all()
    chef_serialized = []
    for y in chef:
        chef_serialized.append(y.serialize())
    return jsonify({'results': chef_serialized}), 200

@api.route('/student', methods=['GET'])
def get_student():
    student = Student.query.all()
    student_serialized = []
    for z in student:
        student_serialized.append(z.serialize())
    return jsonify({'results': student_serialized}), 200

@app.route('/me', methods='GET')
@jwt_required
def get_my_information():
    token = jsonify(access_token)
    return token

#login
@app.route('/login', methods=('POST'))
def login():
    email, password = request.json.get(
        'email', None
    ), request.json.get(
        'password', None
    )
    if not (email and password):
        return jsonify({'message':'No se han dado los datos'}), 400

    user = User.get_by_email(email)

    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify({'token': access_token}), 200
    else:
        return jsonify({'message':'la contraseña no es correcta'}), 500    
