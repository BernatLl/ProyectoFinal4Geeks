"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Course
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


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
def get_course():
    chef = Chef.query.all()
    chef_serialized = []
    for x in course:
        chef_serialized.append(x.serialize())
    return jsonify({'results': chef_serialized}), 200

@api.route('/student', methods=['GET'])
def get_course():
    stundent = Student.query.all()
    stundent_serialized = []
    for x in course:
        stundent_serialized.append(x.serialize())
    return jsonify({'results': stundent_serialized}), 200
