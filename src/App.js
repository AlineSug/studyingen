import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Top />
      <FlashCard />
    </div>
  );
}

function Top() {
  return (
    <div className="top">
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/logolearning.png"}
        alt="Logo"
        style={{ height: 150 }}
      />
      <h1>Conhecendo frases nativas usadas</h1>
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "You Nailed it!",
    answer: "Voce acertou(conseguiu)",
  },
  {
    id: 7336,
    question: "To seized ",
    answer: "Conquistar/Agarrar/Se apoderar",
  },
  {
    id: 8832,
    question: "Made a pass at me",
    answer: "Dar em cima/ investida/ flertar",
  },
  { id: 2233, question: "Double Standard", answer: "Dois pesos duas medidas" },
];

function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
