document.addEventListener("DOMContentLoaded", () => {
    const preferencesForm = document.getElementById("preferencesForm");
    const chatInterface = document.getElementById("chatInterface");
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");
    const restartButton = document.getElementById("restartButton");
    const chatContainer = document.querySelector(".chat-container");

    // Submit user preferences and show chat interface
    preferencesForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(preferencesForm);

        fetch('/preferences', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                preferencesForm.style.display = "none";
                chatInterface.style.display = "block";
                userInput.focus(); // Focus on input field after showing chat
                showInitialMessage(); // Show the initial message
            }
        })
        .catch(error => console.error('Error:', error));
    });

    // Send a message and get a response
    sendButton.addEventListener("click", sendMessage);

    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            appendMessage("user", message); // Show user message in chat
            userInput.value = ''; // Clear input field

            fetch('/chat', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({message: message})
            })
            .then(response => response.json())
            .then(data => {
                appendMessage("bot", formatResponse(data.response)); // Show bot response in chat
                appendFollowUpQuestions(data.follow_up_questions); // Show follow-up questions
            })
            .catch(error => console.error('Error:', error));
        }
    }

    // Function to show the initial message
    function showInitialMessage() {
        const initialMessage = "Hello, I am your fitness instructor. Based on your preferences, feel free to start asking your questions.";
        appendMessage("bot", initialMessage);
    }

    // Restart the conversation and show the preferences form again
    restartButton.addEventListener("click", () => {
        chatInterface.style.display = "none";
        preferencesForm.style.display = "block";
        chatContainer.innerHTML = ''; // Clear chat messages
        preferencesForm.reset(); // Reset form fields
    });

    // Download the chat as a text file
    document.getElementById("downloadButton").addEventListener("click", function() {
        const chatHistory = chatContainer.innerText;
        const blob = new Blob([chatHistory], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chat_history.txt';
        a.click();
        URL.revokeObjectURL(url);
    });

    // Function to append messages to the chat container
    function appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.innerHTML = message; // Set as innerHTML for formatted response

        if (sender === "bot") {
            const copyButton = document.createElement("button");
            copyButton.innerText = "Copy";
            copyButton.onclick = () => {
                navigator.clipboard.writeText(message);
                alert("Response copied!");
            };
            messageDiv.appendChild(copyButton);
        }

        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll to the latest message
    }

    // Format and structure the bot's response
    function formatResponse(response) {
        return response
            .replace(/###\s(.+)/g, '<h4>$1</h4>') // Replace ### headings
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // Bold text
            .replace(/- (.+)/g, '<li>$1</li>') // Convert lists
            .replace(/\n/g, '<br>'); // New lines to line breaks
    }

    // Append follow-up questions dynamically
    function appendFollowUpQuestions(questions) {
        const followUpDiv = document.createElement("div");
        followUpDiv.classList.add("follow-up");

        questions.forEach(q => {
            const questionButton = document.createElement("button");
            questionButton.innerText = q;
            questionButton.onclick = () => {
                userInput.value = q;
                sendMessage();
            };
            followUpDiv.appendChild(questionButton);
        });

        chatContainer.appendChild(followUpDiv);
    }
});
