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
            }
        })
        .catch(error => console.error('Error:', error));
    });

    // Send a message and get a response
    sendButton.addEventListener("click", () => {
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
                appendMessage("bot", data.response); // Show bot response in chat
            })
            .catch(error => console.error('Error:', error));
        }
    });

    // Restart the conversation and show the preferences form again
    restartButton.addEventListener("click", () => {
        chatInterface.style.display = "none";
        preferencesForm.style.display = "block";
        chatContainer.innerHTML = ''; // Clear chat messages
        preferencesForm.reset(); // Reset form fields
    });

    // Function to append messages to the chat container
    function appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = message;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll to the latest message
    }
});
