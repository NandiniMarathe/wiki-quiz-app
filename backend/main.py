from fastapi import FastAPI
from scraper import scrape_wikipedia
from llm import generate_quiz

app = FastAPI()

@app.post("/generate")
def generate(url: str):
    title, content = scrape_wikipedia(url)
    quiz = generate_quiz(content)
    return {"title": title, "quiz": quiz}
