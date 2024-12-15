from flask import Blueprint, request, jsonify
from flask_app.utils import load_data, save_data
from datetime import datetime

chat_routes = Blueprint("chat", __name__)

# POST Save user and bot messages
@chat_routes.route("/", methods=["POST"])
def handle_chat():
    data = load_data()
    chat_data = request.json
    
    if not all(key in chat_data for key in ["user_id", "message"]):
        return jsonify({"error": "Missing fields"}), 400

    # Simulate a bot response
    bot_response = f"Bot says: I received your message - '{chat_data['message']}'"

    # Add user and bot messages
    new_message_id = len(data["messages"]) + 1
    data["messages"].append({
        "id": new_message_id,
        "user_id": chat_data["user_id"],
        "sender": "user",
        "text": chat_data["message"],
        "timestamp": datetime.utcnow().isoformat()
    })
    data["messages"].append({
        "id": new_message_id + 1,
        "user_id": chat_data["user_id"],
        "sender": "bot",
        "text": bot_response,
        "timestamp": datetime.utcnow().isoformat()
    })

    save_data(data)
    return jsonify({"response": bot_response}), 200
