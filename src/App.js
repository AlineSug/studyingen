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
  { id: 4, question: "Double Standard", answer: "Dois pesos, duas medidas" },
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
    answer: "Adiar/ Desanimar/ Afastar",
  },
  {
    id: 11,
    question: "I blurted out",
    answer: "Falei sem pensar",
  },
  {
    id: 12,
    question: "Make out",
    answer: "Beijar/ caricias/ progredir ",
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
    answer: "Deixar ir/ deixar pra lá",
  },
  {
    id: 16,
    question: "Way to go!",
    answer: "Bom trabalho!",
  },
  {
    id: 17,
    question: "He strikes me as a good person",
    answer: "Ele me parece ser uma boa pessoa",
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
    answer: "Gostar muito de algo .../Se divertir fazendo algo",
  },
  {
    id: 22,
    question: "Out of sorts",
    answer: "Não se sentindo bem",
  },
  {
    id: 23,
    question: "I'm game!",
    answer: "Tô dentro/ Eu topo",
  },
  {
    id: 24,
    question: "Open up to me",
    answer: "Se abriu comigo (contou algo)",
  },
  {
    id: 25,
    question: "Let's play it by ear",
    answer: "Vamos deixar rolar (sem planejamento rígido)",
  },
  {
    id: 26,
    question: "Turn a blind eye",
    answer: "Fingir que não vê",
  },
  {
    id: 27,
    question: "Stick around",
    answer: "Ficar",
  },
  {
    id: 28,
    question: "Go out of your way",
    answer: "Fazer mais que o necessário",
  },
  {
    id: 29,
    question: "Ride it out",
    answer: "Esperar passar",
  },
  {
    id: 30,
    question: "Stuffed up",
    answer: "Bloqueado",
  },
  {
    id: 31,
    question: "He is bad news",
    answer: "Ele é um problema",
  },
  {
    id: 32,
    question: "It's goin down!",
    answer: "Vai rolar!/O bicho vai pegar!",
  },
  {
    id: 33,
    question: "Suit your self",
    answer: "Como quiser/Faça como quiser",
  },
  {
    id: 34,
    question: "Kick back",
    answer: "Relaxar",
  },
  {
    id: 35,
    question: "Act up",
    answer: "Comportar mal/ Aprontar /Falha",
  },
  {
    id: 36,
    question: "Cut to the chase",
    answer: "Direto ao ponto",
  },
  {
    id: 37,
    question: "Settle down",
    answer: "Acalmar",
  },
  {
    id: 38,
    question: "Flip Out!",
    answer: "Surtar/ Ficar muito bravo",
  },
  {
    id: 39,
    question: "Get rid off",
    answer: "Se livrar",
  },
  {
    id: 40,
    question: "We get along well",
    answer: "A gente se da bem/ Se curte",
  },
  {
    id: 41,
    question: "I kid you not!",
    answer: "É sério!/ Não é brincadeira",
  },
  {
    id: 42,
    question: "Start from scratch",
    answer: "Começar do início",
  },
  {
    id: 43,
    question: "It's matter of time",
    answer: "É uma questão de tempo",
  },
  {
    id: 44,
    question: "To wrap things up",
    answer: "Encerrar/ concluir /finalizar",
  },
  {
    id: 45,
    question: "Let's pick up the pace",
    answer: "Vamos acelerar/ fazer mais rápido",
  },
  {
    id: 46,
    question: "It's getting old",
    answer: "Está ficando chato/ Já deu",
  },
  {
    id: 47,
    question: "Rile you up",
    answer: "Te irritar/ Te provocar",
  },
  {
    id: 48,
    question: "Don't play coy",
    answer: "Não faça a desentendida",
  },
  {
    id: 49,
    question: "I rest my case",
    answer: "Isso prova meu ponto",
  },
  {
    id: 50,
    question: "That ain't gonna fly",
    answer: "Não vai funcionar",
  },
  {
    id: 51,
    question: "Hence",
    answer: "Por essa razão",
  },
  {
    id: 52,
    question: "It's not set in stone",
    answer: "Não é a decisão final",
  },
  {
    id: 53,
    question: "It was a cinch",
    answer: "Foi moleza",
  },
  {
    id: 54,
    question: "Cross your heart",
    answer: "Prometa",
  },
  {
    id: 55,
    question: "No backing out",
    answer: "Não pode quebrar a promessa",
  },
  {
    id: 56,
    question: "She is deflecting",
    answer: "Ela está fugindo do assunto",
  },
  {
    id: 57,
    question: "Knock it off!",
    answer: "Pare com isso!",
  },
  {
    id: 58,
    question: "Looking up",
    answer: "Melhorando",
  },
  {
    id: 59,
    question: "That was a bust",
    answer: "Isso foi um fracasso/ Não deu certo",
  },
  {
    id: 60,
    question: "Lay people off",
    answer: "Demitir pessoas",
  },
  {
    id: 61,
    question: "I'm so jumpy",
    answer: "Estou muito nervosa",
  },
  {
    id: 62,
    question: "To turn things around",
    answer: "Virar o jogo/ Dar a volta por cima",
  },
  {
    id: 63,
    question: "Stall for me",
    answer: "Ganhar tempo pra mim (segurar a situação)",
  },
  {
    id: 64,
    question: "I'm nosy",
    answer: "Sou curiosa/ Intrometida",
  },
  {
    id: 65,
    question: "Catching up with",
    answer: "Colocar a conversa em dia/ Alcançando/ Cobrando o preço",
  },
  {
    id: 66,
    question: "Setting the records straight",
    answer: "Esclarecendo as coisas",
  },
  {
    id: 67,
    question: "Spoiling me",
    answer: "Me mimando/ Me estragando",
  },
  {
    id: 68,
    question: "Drop off",
    answer: "Deixar(alguém em algum lugar) /Reduzir/ Cochilar",
  },
  {
    id: 69,
    question: "Drop Out",
    answer: "Abandonar(ex: Faculdade)",
  },
  {
    id: 70,
    question: "I would like to stress",
    answer: "Gostaria de enfatizar",
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
