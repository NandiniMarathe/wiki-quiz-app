import React from "react";
import Modal from "react-modal";

export default function QuizModal({ quiz, onClose }) {
  return (
    <Modal isOpen={true} onRequestClose={onClose}>
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
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}
