from flask import Flask
from flask_cors import CORS

api = Flask(__name__)
CORS(api, origins=["http://localhost:5173"])

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "bob",
        "test" :"test test test"
    }

    return response_body