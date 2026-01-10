# Wiki Quiz App

## Objective
Build a full-stack application that accepts a Wikipedia article URL,
scrapes the content, and automatically generates a quiz using a Large
Language Model (LLM).

---

## Tech Stack
- Backend: FastAPI (Python)
- Database: PostgreSQL
- Scraping: BeautifulSoup (HTML scraping only)
- LLM: Gemini Free API via LangChain
- Frontend: Minimal HTML + JavaScript

---

## Features

### Tab 1 – Generate Quiz
- Input a Wikipedia article URL
- Scrapes article content
- Generates:
  - Summary
  - Key entities (people, organizations, locations)
  - Article sections
  - 5–10 MCQs with:
    - Four options
    - Correct answer
    - Difficulty (easy / medium / hard)
    - Short explanation
  - Related Wikipedia topics
- Stores all data in PostgreSQL

### Tab 2 – Past Quizzes
- Displays previously processed Wikipedia URLs
- Clicking a quiz shows full details in the same structure

---

## API Endpoints

### POST /generate
Generates quiz from Wikipedia URL.

**Query Parameter**
