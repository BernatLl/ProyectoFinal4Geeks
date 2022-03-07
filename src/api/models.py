from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, Date
from sqlalchemy.orm import relationship, backref

db = SQLAlchemy()

# tags = db.Table('tags',
#     db.Column('student_id', db.Integer, db.ForeignKey('student.id'),primary_key=True),
#     db.Column('course_id', db.Integer, db.ForeignKey('course.id'),primary_key=True)
# )

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'User {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

 

class CardInfo(db.Model):
    __tablename__ = 'cardinfo'
    id = db.Column(db.Integer, primary_key=True)
    cardInfoNum = db.Column(db.Integer, unique=True, nullable=False)
    cardInfoDate = db.Column(db.Integer, unique=True, nullable=False)
    cardInfoCVC = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return f'Student {self.id}'

  

class Student(db.Model):

    __tablename__ : 'student'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    full_name = db.Column(db.String(120), nullable=False)
    student_description = db.Column(db.String(400), nullable=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    facebook_url = db.Column(db.String(120), nullable=True)
    instagram_url = db.Column(db.String(120), nullable=True)
    linkedin_url = db.Column(db.String(120), nullable=True)
    twitter_url = db.Column(db.String(120), nullable=True)
    website_url = db.Column(db.String(120), nullable=True)
    image = db.Column(db.String(240), unique=True, nullable=True)
    #tags = db.relationship('Course', secondary=tags, lazy='subquery', backref=db.backref('student', lazy=True))
   

    
    def __repr__(self):
        return f'Student {self.id}'

    def serialize(self):
        return {
            'id': self.id ,
            'email': self.email ,
            'full_name': self.full_name ,
            'student_description': self.student_description ,
            'username': self.username ,
            'facebook_url': self.facebook_url ,
            'instagram_url': self.instagram_url ,
            'linkedin_url': self.linkedin_url ,
            'twitter_url': self.twitter_url ,
            'website_url': self.website_url ,
            'image': self.image ,
            
            }
        

class Chef(db.Model):

    __tablename__ : 'chef'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    full_name = db.Column(db.String(120), nullable=False)
    chef_description = db.Column(db.String(400), unique=False, nullable=False)
    bank_info = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    # course = db.relationship("Course", back_populates="chef")

    def __repr__(self):
        return f'Chef {self.id}'
    
    def serialize(self):
        return {
        'id': self.id,
        'email': self.email,
        'full_name': self.full_name,
        'chef_description': self.chef_description,
        'bank_info' : self.bank_info,
        'address': self.address,
        
        }

class Course(db.Model):

    __tablename__: "course"

    id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(120), unique=True, nullable=False)
    dificulty = db.Column(db.String(20),  nullable=False)
    style = db.Column(db.String(200),  nullable=False)
    country = db.Column(db.String(200),  nullable=False)
    description = db.Column(db.String(200),  nullable=False)
    ingredient = db.Column(db.String(200),  nullable=False)
    list_ingredient = db.Column(db.String(200),  nullable=False)
    requeriments = db.Column(db.String(200),  nullable=False)
    knowledge = db.Column(db.String(200),  nullable=False)
    price = db.Column(db.Float, nullable=False)
    title = db.Column(db.String(200),  nullable=False)
    video = db.Column(db.String(240), unique=True, nullable=False)
    img = db.Column(db.String(240), unique=True, nullable=False)

    # chef_id = db.Column(db.Integer, ForeignKey('chef.id'))
    # chef = db.relationship("Chef", back_populates="course")

    def __repr__(self):
        return f'Course {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            'course_name': self.course_name,  
            'dificulty':  self.dificulty,
            'style': self.style,
            'country':  self.country,
            'description':  self.description,
            'ingredient': self.ingredient,
            'list_ingredient':  self.list_ingredient,
            'requeriments': self.requeriments,
            'knowledge': self.knowledge,
            'price': self.price,
            'title': self.title,
            'video': self.video,
            'img' : self.img
        }
    

