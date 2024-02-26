import openai
openai.api_key = "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"

def get_ai_response(message, preferences):
    try:
        # Construct the prompt to include user preferences for personalized advice
        prompt = f"You are a fitness advisor. The user's preferences are: {preferences}. Based on this, respond to the user's question: {message}"

        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": message}
            ]
        )
        # Extracting and returning the chatbot's response
        return response.choices[0].message.content
    except Exception as e:
        # Return a friendly error message in case of API failure or other exceptions
        return f"Sorry, I couldn't fetch a response from the AI model due to: {str(e)}"
