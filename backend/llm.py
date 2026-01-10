import openai
import json

# Set your OpenAI API key
openai.api_key = "YOUR_OPENAI_KEY"

def generate_quiz(text):
    prompt = f"""
    Generate 5 multiple-choice questions from this Wikipedia content:
    {text}
    Return JSON with:
    question, options (A-D), answer, explanation, difficulty, related_topics
    """

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=1500
        )
        return json.loads(response.choices[0].message.content)
    except Exception as e:
        print("OpenAI Error:", e)
        return {"error": "Failed to generate quiz"}
