import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizModal from "./QuizModal";

export default function History() {
  const [quizzes, setQuizzes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/history").then((res) => setQuizzes(res.data));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>URL</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((q) => (
            <tr key={q.id}>
              <td>{q.id}</td>
              <td>{q.title}</td>
              <td>{q.url}</td>
              <td>
                <button onClick={() => setSelected(q)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selected && <QuizModal quiz={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
