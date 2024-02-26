from flask import Flask, render_template, request, session, jsonify, redirect, url_for
import os
from chatbot.model import get_ai_response

app = Flask(__name__)
app.secret_key = os.urandom(24)  # Generates a random secret key

@app.route('/', methods=['GET'])
def index():
    # Initially display the form to capture user preferences
    return render_template('index.html')

@app.route('/preferences', methods=['POST'])
def set_preferences():
    # Store user preferences in session
    session['preferences'] = request.form.to_dict()
    return jsonify({'success': True})

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    # Fetch response from ChatGPT model considering user preferences
    response = get_ai_response(user_message, session.get('preferences', {}))
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
