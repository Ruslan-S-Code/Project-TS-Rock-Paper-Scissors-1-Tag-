import React, { useState } from "react";
import "./Game.css";

// Импортируем PNG-иконки
import rockIcon from "../assets/img/rock.png";
import paperIcon from "../assets/img/paper.png";
import scissorsIcon from "../assets/img/scissors.png";

// Типы для выбора
type Choice = "rock" | "paper" | "scissors";

// Компонент игры
const Game: React.FC = () => {
  // Состояния
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");

  // Функция для выбора пользователя
  const handleUserChoice = (choice: Choice) => {
    // Выбор пользователя
    setUserChoice(choice);

    // Случайный выбор компьютера
    const choices: Choice[] = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    // Определение победителя
    determineWinner(choice, randomChoice);
  };

  // Функция для определения победителя
  const determineWinner = (user: Choice, computer: Choice) => {
    if (user === computer) {
      setResult("Draw!");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  // Функция для сброса игры
  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="game-container">
      {/* Заголовок и подзаголовок */}
      <h1>Rock Paper Scissors</h1>
      <h2>Choose your weapon</h2>

      {/* Отображение выбора и результата */}
      <div className="results">
        <p>You choose: {userChoice}</p>
        <p>CPU choose: {computerChoice}</p>
        <p>Result: {result}</p>
      </div>

      {/* Блок с иконками выбора */}
      <div className="choices">
        <button
          onClick={() => handleUserChoice("rock")}
          className="icon-button"
        >
          <img src={rockIcon} alt="Rock" className="icon" />
        </button>
        <button
          onClick={() => handleUserChoice("paper")}
          className="icon-button"
        >
          <img src={paperIcon} alt="Paper" className="icon" />
        </button>
        <button
          onClick={() => handleUserChoice("scissors")}
          className="icon-button"
        >
          <img src={scissorsIcon} alt="Scissors" className="icon" />
        </button>
      </div>

      {/* Кнопка сброса */}
      <button onClick={resetGame} className="reset-button">
        Restart Game
      </button>
    </div>
  );
};

export default Game;
