import openai
openai.api_key = "key"

def get_ai_response(message, preferences):
    try:
        # Construct the prompt to include user preferences for personalized advice
        prompt = f"You are a fitness advisor. Only answer questions related to health and fitness. No Other Questions should be entertained. The user's preferences are: {preferences}. Based on this, respond to the user's question: {message}"

        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": message}
            ]
        )
        
        # Get the AI's response
        ai_response = response.choices[0].message.content
        
        # Generate context-specific follow-up questions
        if "muscle gain" in message.lower():
            follow_up_questions = [
                "Can you suggest a workout routine for muscle gain?",
                "What supplements should I take for muscle growth?",
                "How much protein should I eat daily?"
            ]
        elif "weight loss" in message.lower():
            follow_up_questions = [
                "How many calories should I consume for weight loss?",
                "Can you suggest a cardio routine?",
                "What should I avoid eating to lose weight?"
            ]
        elif "endurance" in message.lower():
            follow_up_questions = [
                "What exercises improve endurance?",
                "How long should I run for endurance training?",
                "Can you suggest an interval training routine?"
            ]
        else:
            follow_up_questions = [
                "Can you suggest a workout routine?",
                "What should I eat for muscle gain?",
                "How do I improve my endurance?"
            ]

        # Return the AI's response and follow-up questions
        return {"response": ai_response, "follow_up_questions": follow_up_questions}

    except Exception as e:
        return {"response": f"Sorry, I couldn't fetch a response from the AI model due to: {str(e)}", "follow_up_questions": []}
