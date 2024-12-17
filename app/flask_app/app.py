from flask import Flask, jsonify
from flask_app.routes.users import user_routes
from flask_app.routes.chat import chat_routes
from dotenv import load_dotenv
import os
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)

# Load data from .env
app.config['SECRET_KEY'] = os.getenv('FLASK_SECRET_KEY')

CORS(app)

# Register routes
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(chat_routes, url_prefix='/api/chat')

@app.route('/')
def index():
    return jsonify({"message": "Welcome to the Flask Backend!"})

if __name__ == '__main__':
    app.run(debug=True)
