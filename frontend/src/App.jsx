import React, { useState } from "react";
import GenerateQuiz from "./components/GenerateQuiz";
import History from "./components/History";

export default function App() {
  const [tab, setTab] = useState("generate");

  return (
    <div>
      <button onClick={() => setTab("generate")}>Generate Quiz</button>
      <button onClick={() => setTab("history")}>History</button>
      {tab === "generate" ? <GenerateQuiz /> : <History />}
    </div>
  );
}
