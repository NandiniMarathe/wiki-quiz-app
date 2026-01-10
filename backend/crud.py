from .models import Quiz
from .database import SessionLocal

def save_quiz(data: dict):
    db = SessionLocal()
    quiz = Quiz(**data)
    db.add(quiz)
    db.commit()
    db.refresh(quiz)
    db.close()
    return quiz

def get_all_quizzes():
    db = SessionLocal()
    quizzes = db.query(Quiz).all()
    db.close()
    return quizzes

def get_quiz_by_id(quiz_id: int):
    db = SessionLocal()
    quiz = db.query(Quiz).filter(Quiz.id == quiz_id).first()
    db.close()
    return quiz
