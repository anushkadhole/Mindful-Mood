from flask import Flask, request, jsonify
from flask_cors import CORS
import random
from database import init_db, add_mood, get_moods

app = Flask(__name__)
CORS(app)

quotes = [
    "Believe in yourself!",
    "Every day is a second chance.",
    "Stay positive, work hard, make it happen.",
    "Your feelings are valid.",
    "Take it one day at a time."
]

@app.route('/mood', methods=['POST'])
def post_mood():
    data = request.get_json()
    mood = data.get('mood')
    reason = data.get('reason')
    if not mood or not reason:
        return jsonify({'error': 'Mood and reason required'}), 400
    add_mood(mood, reason)
    return jsonify({'message': 'Mood added successfully'}), 201

@app.route('/moods', methods=['GET'])
def get_all_moods():
    moods = get_moods()
    return jsonify(moods), 200

@app.route('/quote', methods=['GET'])
def get_quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5000)
