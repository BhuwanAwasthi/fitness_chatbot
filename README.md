# Fitness Chatbot

## Overview
This fitness chatbot is a Flask-based web application designed to provide personalized fitness and nutrition advice. Utilizing the OpenAI GPT-3 API, the chatbot engages users in conversation, gathering their preferences and goals to offer customized workout and diet plans.

## Features
- Interactive chat interface for real-time communication
- Personalized advice based on user input regarding fitness goals and dietary preferences
- Integration with the OpenAI GPT-3 API for dynamic response generation

## Project Structure

fitness-chatbot/
│
├── static/
│   ├── css/
│   │   └── style.css       # CSS file for styling the web interface
│   ├── js/
│   │   └── chat.js         # JavaScript file for handling AJAX requests and UI interactions
│
├── templates/
│   └── index.html          # HTML template for the chatbot interface
│
├── chatbot/
│   └── model.py            # Handles AI model integration and API requests
│
├── app.py                  # Main Flask application
│
└── requirements.txt        # Lists project dependencies


## Local Setup

1. **Clone the Repository**
   git clone <GITHUB_REPOSITORY_URL>
   cd fitness-chatbot

2. **Install Dependencies**
 
   pip install -r requirements.txt


3. **Run the Application**

   python app.py
  

4. **Access the Application**
   Open your web browser and navigate to `http://127.0.0.1:5000/`.

## Deployment
The chatbot is deployed on PythonAnywhere, accessible at [http://cse2020021049.pythonanywhere.com/](url). The deployment process involves transferring the files to the PythonAnywhere server, installing dependencies, and configuring the WSGI file to point to the Flask application.

## Video Demonstration
A comprehensive walkthrough of the chatbot's functionality and deployment is available at <VIDEO_DEMO_LINK>.

## Additional Notes
- Ensure you have the OpenAI API key available as it is required for the chatbot to function correctly.

## Support
For support, please contact bhuwanawasthi2021@gmail.com.
