import json
import os

DATA_FILE = os.path.join(os.path.dirname(__file__), "data.json")

# Load JSON data
def load_data():
    if not os.path.exists(DATA_FILE):
        return {"users": [], "messages": []}
    with open(DATA_FILE, "r") as file:
        return json.load(file)

# Save JSON data
def save_data(data):
    with open(DATA_FILE, "w") as file:
        json.dump(data, file, indent=4)
