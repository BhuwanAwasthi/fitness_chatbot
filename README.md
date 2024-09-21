# Fitness Chatbot

## Overview
The **Fitness Chatbot** is a Flask-based web application designed to offer personalized fitness and nutrition advice, dynamically tailored to user inputs and preferences. Leveraging OpenAI's **GPT-3.5-turbo** API, the chatbot provides context-aware, real-time responses, offering customized workout routines and diet plans. The system incorporates a structured and user-friendly chat interface, which enhances user engagement by offering follow-up questions and additional functionalities like chat history download and message copying.

## Features
- **Dynamic, AI-driven chatbot**: Integrates OpenAI GPT-3.5-turbo API for generating real-time, context-aware fitness and nutrition advice based on user goals and dietary preferences.
- **Personalized responses**: Tailors workout routines and diet plans by processing user inputs like fitness goals, dietary restrictions, and available equipment.
- **Enhanced UI/UX**: Features a fully interactive chat interface with automatic message sending via Enter key, follow-up question suggestions, chat history download, and one-click response copying.
- **Session Management**: Manages user preferences across sessions, ensuring a seamless conversational experience.
- **Structured Responses**: Formats AI responses into readable, structured information (bullet points, headings, etc.) for better user interaction.

## Project Structure

```
fitness-chatbot/
│
├── static/
│   ├── css/
│   │   └── style.css  # CSS file for styling the web interface
│   ├── js/
│   │   └── chat.js  # JavaScript file for handling AJAX requests and UI interactions
│
├── templates/
│   └── index.html  # HTML template for the chatbot interface
│
├── chatbot/
│   └── model.py  # Handles AI model integration, context-specific follow-up questions, and API requests
│
├── app.py  # Main Flask application managing routes, session, and user interaction logic
│
└── requirements.txt  # Lists project dependencies
```

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/BhuwanAwasthi/fitness_chatbot/
cd fitness-chatbot
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Application

```bash
python app.py
```

### 4. Access the Application
Open your web browser and navigate to `http://127.0.0.1:5000/`.

## Updated Features

- **Automatic Initial Message**: The chatbot greets users upon entering the chat interface, displaying preferences and guiding them to start asking questions.
- **Contextual Follow-Up Questions**: After each user query, the chatbot generates 2-3 context-relevant follow-up questions to guide further interaction.
- **Download Chat History**: Users can download the chat transcript for future reference.
- **Copy Responses**: Each response from the chatbot can be copied to the clipboard with a single click.

## Deployment
The chatbot is deployed on PythonAnywhere, accessible at [http://cse2020021049.pythonanywhere.com/]. Deployment involves transferring the project files, installing dependencies, and configuring the WSGI file to point to the Flask application. 

### Deployment Steps:
1. **Transfer project files** to the PythonAnywhere server.
2. **Install dependencies** via the virtual environment on PythonAnywhere.
3. **Configure the WSGI file** to route incoming HTTP requests to the Flask application.

## Additional Notes
- Ensure that the **OpenAI API key** is available and correctly set up in the `model.py` file, as it is essential for the chatbot’s functionality.
  
## Support
For any questions or support, feel free to reach out via email at **bhuwanawasthi2021@gmail.com**.
