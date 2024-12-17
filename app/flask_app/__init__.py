from flask import Flask
from flask_cors import CORS
from flask_app.routes.users import user_routes
from flask_app.routes.chat import chat_routes
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Create Flask app instance
app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Configure app
app.config['SECRET_KEY'] = os.getenv('FLASK_SECRET_KEY')

# Register blueprints
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(chat_routes, url_prefix='/api/chat')

@app.route('/')
def index():
    return {"message": "Welcome to the Flask Backend!"}
