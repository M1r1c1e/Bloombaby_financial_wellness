from database import db
from flask_login import UserMixin

class User(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    is_active = db.Column(db.Boolean, nullable=False, default=True)

    @property
    def is_active(self):
        return True 



class humor(db.Model):
    __tablename__ = 'financial_humor_table'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(500), nullable=False)
    content = db.Column(db.TEXT(200), nullable=False)

    def to_dict(self):
        return {"title" : self.title, "content" : self.content}


class guidance(db.Model):
    __tablename__ = 'financial_guidance'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(500), nullable=False)
    content = db.Column(db.TEXT(200), nullable=False)

    def to_dict(self):
        return {"title" : self.title, "content" : self.content}

class conner(db.Model):
    __tablename__ = 'parent_conner'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(500), nullable=False)
    content = db.Column(db.TEXT(200), nullable=False)

    def to_dict(self):
        return {"title" : self.title, "content" : self.content}



