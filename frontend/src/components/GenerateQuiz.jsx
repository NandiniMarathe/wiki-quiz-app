import React, { useState } from "react";
import axios from "axios";

export default function GenerateQuiz() {
  const [url, setUrl] = useState("");
  const [quiz, setQuiz] = useState(null);

  const handleGenerate = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/generate", { url });
      setQuiz(res.data);
    } catch (err) {
      alert(err.response.data.detail || err.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Wikipedia URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate Quiz</button>

      {quiz && (
        <div>
          <h2>{quiz.title}</h2>
          {quiz.quiz.map((q, idx) => (
            <div key={idx}>
              <p>{q.question}</p>
              <ul>
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
              <p>Answer: {q.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
