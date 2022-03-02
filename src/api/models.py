from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, Date
from sqlalchemy.orm import relationship, backref

db = SQLAlchemy()

tags = db.Table('tags',
    db.Column('student_id', db.Integer, db.ForeignKey('student.id'),primary_key=True),
    db.Column('course_id', db.Integer, db.ForeignKey('course.id'),primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'User {self.username}'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class CardInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cardInfoNum = db.Column(db.Integer, unique=True, nullable=False)
    cardInfoDate = db.Column(db.Integer, unique=True, nullable=False)
    cardInfoCVC = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return f'Student {self.id}'




class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    fullName = db.Column(db.String(120), nullable=False)
    studentDescription = db.Column(db.String(400), nullable=True)
    nickName = db.Column(db.String(120), unique=True, nullable=False)
    facebookURL = db.Column(db.String(120), nullable=True)
    instagramURL = db.Column(db.String(120), nullable=True)
    linkedinURL = db.Column(db.String(120), nullable=True)
    twitterURL = db.Column(db.String(120), nullable=True)
    websiteURL = db.Column(db.String(120), nullable=True)

    tags = db.relationship('Course', secondary=tags, lazy='subquery', backref=db.backref('student', lazy=True))
    notifications = db.relationship("Notifications", back_populates="student")

    
    def __repr__(self):
        return f'Student {self.id}'


class Chef(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    fullName = db.Column(db.String(120), nullable=False)
    chefDescription = db.Column(db.String(400), unique=False, nullable=False)
    bankInfo = db.Column(db.Integer, unique=True, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    course = db.relationship("Course", back_populates="chef")

    def __repr__(self):
        return f'Chef {self.id}'


class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    courseName = db.Column(db.String(120), unique=False, nullable=False)
    dificulty = db.Column(db.String(20), unique=False, nullable=False)
    style = db.Column(db.String(50), unique=False, nullable=False)
    country = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(50), unique=False, nullable=False)
    ingredient = db.Column(db.String(50), unique=False, nullable=False)
    listIngredient = db.Column(db.String(200), unique=False, nullable=False)
    requeriments = db.Column(db.String(50), unique=False, nullable=False)
    knowledge = db.Column(db.String(50), unique=False, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    title = db.Column(db.String(50), unique=False, nullable=False)
    video = db.Column(db.String(240), unique=False, nullable=False)
    chef_id = db.Column(db.Integer, ForeignKey('chef.id'))
    chef = db.relationship("Chef", back_populates="course")

    def __repr__(self):
        return f'Course {self.id}'

class Notifications(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    promotions = db.Column(db.Boolean)
    announcements = db.Column(db.Boolean)
    promoEmail  = db.Column(db.Boolean)
    student_id = db.Column(Integer, ForeignKey('student.id'))

    def __repr__(self):
        return f'Notifications {self.id}'