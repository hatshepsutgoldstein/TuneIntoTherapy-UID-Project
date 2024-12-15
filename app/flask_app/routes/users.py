from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
import json
import os

# Path to data.json
DATA_FILE = os.path.join(os.path.dirname(__file__), "../data.json")

user_routes = Blueprint('users', __name__)

# Helper function to load and save data
def load_data():
    if not os.path.exists(DATA_FILE):
        return {"users": []}
    with open(DATA_FILE, "r") as file:
        return json.load(file)

def save_data(data):
    with open(DATA_FILE, "w") as file:
        json.dump(data, file, indent=4)

# POST Register a new user
@user_routes.route('/register', methods=['POST'])
def register():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not (name and email and password):
        return jsonify({"error": "Missing required fields"}), 400

    # Load existing users
    with open('flask_app/data.json', 'r') as f:
        users_data = json.load(f)

    # Check if email already exists
    if any(user['email'] == email for user in users_data['users']):
        return jsonify({"error": "Email already exists"}), 400

    # Add new user to data
    new_user = {
        "id": len(users_data['users']) + 1,
        "name": name,
        "email": email,
        "password": password  # Store plain text password
    }
    users_data['users'].append(new_user)

    # Save to data.json
    with open('flask_app/data.json', 'w') as f:
        json.dump(users_data, f, indent=4)

    return jsonify({"message": "User registered successfully!"})


# GET all users
@user_routes.route('/', methods=['GET'])
def get_all_users():
    print("GET /api/users/ was called!")
    data = load_data()
    users = [{"id": user["id"], "name": user["name"]} for user in data['users']]
    print("Returning data:", users)  # Debugging print
    return jsonify(users)

# POST Login user
@user_routes.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Load existing users
    with open('flask_app/data.json', 'r') as f:
        users_data = json.load(f)

    # Find user with matching email and password
    user = next((u for u in users_data['users'] if u['email'] == email and u['password'] == password), None)
    if not user:
        return jsonify({"error": "Invalid email or password"}), 401

    # Return success message (or token if needed)
    return jsonify({"message": "Login successful", "user": user})


    return jsonify({"token": token})
