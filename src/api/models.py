from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, Date
from sqlalchemy.orm import relationship, backref

db = SQLAlchemy()

# tags = db.Table('tags',
#     db.Column('course_id', db.Integer, db.ForeignKey('course.id'),primary_key=True),
#     db.Column('user_id', db.Integer, db.ForeignKey('user.id'),primary_key=True)
# )

class User(db.Model):
    __tablename__ = 'user'
    
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(240), nullable=False)
    email = db.Column(db.String(240), unique=True, nullable=False)
    password = db.Column(db.String(240), unique=False, nullable=False)
    student_description = db.Column(db.String(400), nullable=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    image = db.Column(db.String(240), nullable=True)
    
    
    def __repr__(self):
        return f'User {self.id}'

    def serialize(self):
        return {
            'id': self.id ,
            'email': self.email ,
            'full_name': self.full_name ,
            'student_description': self.student_description ,
            'username': self.username ,
            'image': self.image ,
            
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

  



class Chef(db.Model):

    __tablename__ = 'chef'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    full_name = db.Column(db.String(120), nullable=False)
    chef_description = db.Column(db.String(400), unique=False, nullable=False)
    bank_info = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    

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

    __tablename__= "course"

    id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(500),  nullable=False)
    ingredient = db.Column(db.String(200),  nullable=False)
    list_ingredient = db.Column(db.String(500),  nullable=False)
    recipe = db.Column(db.String(1000), nullable=False)
    history = db.Column(db.String(1000), nullable=False)
    curiosity = db.Column(db.String(1000),  nullable=False)
    price = db.Column(db.Float, nullable=False)
    title = db.Column(db.String(200),  nullable=False)
    video = db.Column(db.String(500), unique=True, nullable=False)
    img = db.Column(db.String(500), unique=True, nullable=False)
    # tags = db.relationship('User', secondary=tags, lazy='subquery', backref=db.backref('user', lazy=True))
   

    def __repr__(self):
        return f'Course {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            'course_name': self.course_name,  
            'history':  self.history,
            'recipe': self.recipe,
            'curiosity':  self.curiosity,
            'description':  self.description,
            'ingredient': self.ingredient,
            'list_ingredient':  self.list_ingredient,
            'price': self.price,
            'title': self.title,
            'video': self.video,
            'img' : self.img
        }
    

