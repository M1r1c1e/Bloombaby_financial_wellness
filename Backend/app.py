from flask import Flask, jsonify, request, abort, send_from_directory
from os import urandom
from database import db
from dbtable import User, humor, guidance, conner
from flask_login import LoginManager, login_user, login_required, logout_user
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from dotenv import load_dotenv
import os
import secrets


load_dotenv()

app = Flask(__name__, static_folder="../client/build", static_url_path="")
CORS(app)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

database_url = os.getenv('DATABASE_URL')

app.config["SQLALCHEMY_DATABASE_URI"] = database_url
app.config["SECRET_KEY"] = urandom(24)

login_manager = LoginManager()
login_manager.init_app(app)
db.init_app(app)

def create_db():
    with app.app_context():
        db.create_all()

bcrypt = Bcrypt()

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/signup', methods=['POST'])
def signup():
    data = request.form
    required_fields = ['name', 'email', 'password']
    if not all(field in data for field in required_fields):
        return jsonify({'err': 'name, email, password are required'}), 400
    
    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify({'err': 'Email already exists'}), 400
    
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(name=data['name'], email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'suc': 'Account created successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.form
    required_fields = ['email', 'password']
    if not all(field in data for field in required_fields):
        return jsonify({'err': 'Email and password are required'}), 400
    
    email = data.get('email')
    password = data.get('password')
    user = User.query.filter_by(email=email).first()
    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({'err': 'Invalid email or password'}), 401
    
    login_user(user)
    return jsonify({'success': 'Logged in successfully'}), 200

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({'success': 'Logged out successfully'}), 200
#financial humor api 

@app.route('/financial_humor_table', methods=['GET'])
def get_humor ():
    financial_humor_table = humor.query.all()
    return jsonify([humor.to_dict() for humor in financial_humor_table])


@app.route('/api/financial_humor_table/random', methods=['GET'])
def get_random_humor():
    financial_humor_table = humor.query.all()
    humor_list = secrets.choice(financial_humor_table)
    return jsonify(humor_list.to_dict())

@app.route('/api/financial_humor_table', methods=['POST'])
def create_humor():
    if not request.json or not 'financial_humor_table' in request.json:
        abort(400)
    new_content = humor(content=request.json['financial_humor_table'])
    db.session.add(new_content)
    db.session.commit()
    return jsonify(new_content.to_dict()), 201


# Update an existing humor by id
@app.route('/api/financial_humor_table/<int:id>', methods=['PUT'])
def update_humor(id):
    humor = humor.query.get_or_404(id)
    if not request.json or not 'financial_humor_table' in request.json:
        abort(400)
    humor.humor = request.json['humor']
    db.session.commit()
    return jsonify(humor.to_dict())

# Delete a humor by id
@app.route('/api/financial_humor_table/<int:id>', methods=['DELETE'])
def delete_humor(id):
    humor = humor.query.get_or_404(id)
    db.session.delete(humor)
    db.session.commit()
    return '', 204

#FINANCIAL GUIDANCE 
@app.route('/financial_guidance', methods=['GET'])
def get_guidance ():
    financial_guidance = guidance.query.all()
    return jsonify([guidance.to_dict() for guidance  in financial_guidance])


@app.route('/api/financial_guidance/random', methods=['GET'])
def get_random_guidance():
    financial_guidance = guidance.query.all()
    guide = secrets.choice(financial_guidance)
    return jsonify(guide.to_dict())

@app.route('/api/financial_guidance', methods=['POST'])
def create_guidance():
    if not request.json or not 'financial_guidance' in request.json:
        abort(400)
    new_content = guidance(content=request.json['financial_guidance'])
    db.session.add(new_content)
    db.session.commit()
    return jsonify(new_content.to_dict()), 201


# Update an existing guidance  by id
@app.route('/api/financia_guidance/<int:id>', methods=['PUT'])
def update_guidance(id):
    guidance = guidance.query.get_or_404(id)
    if not request.json or not 'financial_guidance' in request.json:
        abort(400)
    guidance.guidance = request.json['guidance']
    db.session.commit()
    return jsonify(guidance.to_dict())

# Delete a guidance by id
@app.route('/api/financial_guidance/<int:id>', methods=['DELETE'])
def delete_guidance(id):
    guidance = guidance.query.get_or_404(id)
    db.session.delete(guidance)
    db.session.commit()
    return '', 204

#api for parent conner
@app.route('/parent_conner', methods=['GET'])
def get_conner():
    parent_conner = conner.query.all()
    return jsonify([conner.to_dict() for conner in parent_conner])


@app.route('/api/parent_conner/random', methods=['GET'])
def get_random_conner():
    parent_conner = conner.query.all()
    conner_item = secrets.choice(parent_conner)
    return jsonify(conner_item.to_dict())

@app.route('/api/parent_conner', methods=['POST'])
def create_conner():
    if not request.json or not 'parent_conner' in request.json:
        abort(400)
    new_content = conner(content=request.json['parent_conner'])
    db.session.add(new_content)
    db.session.commit()
    return jsonify(new_content.to_dict()), 201


# Update an existing conner by id
@app.route('/api/parent_conner/<int:id>', methods=['PUT'])
def update_conner(id):
    conner = conner.query.get_or_404(id)
    if not request.json or not 'parent_conner' in request.json:
        abort(400)
    conner.conner = request.json['parent_conner']
    db.session.commit()
    return jsonify(conner.to_dict())

# Delete a conner by id
@app.route('/api/parent_conner/<int:id>', methods=['DELETE'])
def delete_conner(id):
    conner = conner.query.get_or_404(id)
    db.session.delete(conner)
    db.session.commit()
    return '', 204





@app.route('/', strict_slashes=False)
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    create_db()
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)



