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
        style={{ height: 220, marginTop: 80, padding: 0 }}
      />
      <h1>Inglês Frases Nativas Usadas</h1>
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "You Nailed it!",
    answer: "Você arrasou(Mandou bem)",
  },
  {
    id: 2,
    question: "To seized ",
    answer: "Conquistar/Agarrar/Se apoderar",
  },
  {
    id: 3,
    question: "Made a pass at me",
    answer: "Dar em cima/ investida/ flertar",
  },
  { id: 4, question: "Double Standard", answer: "Dois pesos duas medidas" },
  { id: 5, question: "Let's kick off", answer: "Vamos começar" },
  {
    id: 6,
    question: "Whip up something",
    answer: "Preparar algo rápido",
  },
  {
    id: 7,
    question: "I have a beef with",
    answer: "Tenho problema com...",
  },
  {
    id: 8,
    question: "I'm drawing a blank",
    answer: "Não consigo lembrar",
  },
  {
    id: 9,
    question: "Pricey",
    answer: "Caro",
  },
  {
    id: 10,
    question: "Put off",
    answer: "Adiar, Desanimar, Afastar",
  },
  {
    id: 11,
    question: "I blurted out",
    answer: "Falei sem pensar",
  },
  {
    id: 12,
    question: "Make out",
    answer: "Beijar, caricias, progredir ",
  },
  {
    id: 13,
    question: "I can't make out",
    answer: "Não consigo entender",
  },
  {
    id: 14,
    question: "Make up your mind",
    answer: "Decidir",
  },
  {
    id: 15,
    question: "Let it slide",
    answer: "Deixar ir, deixar pra lá",
  },
  {
    id: 16,
    question: "Way to go!",
    answer: "Bom trabalho!",
  },
  {
    id: 17,
    question: "He strikes me as a good person",
    answer: "Ele parece ser uma boa pessoa",
  },
  {
    id: 18,
    question: "I'm down for it",
    answer: "Estou pronto pra isso",
  },
  {
    id: 19,
    question: "In hindsight",
    answer: "Olhando para trás(refletindo)",
  },
  {
    id: 20,
    question: "I bet you",
    answer: "Eu aposto que",
  },
  {
    id: 21,
    question: "Get a kick off something",
    answer: "Gostar muito de algo ..., Se divertir fazendo algo",
  },
  {
    id: 22,
    question: "Out of sorts",
    answer: "Não se sentindo bem",
  },
  {
    id: 23,
    question: "I'm game!",
    answer: "Tô dentro! Eu topo",
  },
  {
    id: 24,
    question: "Open up to me",
    answer: "Se abriu comigo (contou algo)",
  },
  {
    id: 25,
    question: "Let's play it by ear",
    answer: "Vamos deixar rolar (sem planejamento rígido",
  },
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
