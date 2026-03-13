"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { quizzes } from "../../../../data/quizzes";

type CourseKey = keyof typeof quizzes;
type LevelKey = "debutant" | "intermediaire" | "avance";

export default function QuizPage() {
  const params = useParams();

  const course = params.course as CourseKey;
  const level = params.level as LevelKey;

  const quiz = quizzes[course]?.[level];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (!quiz || isAnswered || isFinished) return;

    if (timeLeft === 0) {
      setFeedback("Temps écoulé ! Question ratée.");
      setIsAnswered(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isAnswered, isFinished, quiz]);

  if (!quiz) {
    return (
      <main className="quiz-page">
        <div className="quiz-topbar">
          <h1 className="brand">WIKILEARN</h1>
        </div>

        <div className="quiz-container">
          <h2>Cours introuvable</h2>
          <Link href="/" className="next-button">
            Retour accueil
          </Link>
        </div>
      </main>
    );
  }

  const questions = quiz.questions;
  const question = questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;

  const handleValidate = () => {
    if (!selectedAnswer || isAnswered) return;

    const isCorrect = selectedAnswer === question.answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setXp((prev) => prev + 10);
      setFeedback("Bonne réponse ! +10 XP");
    } else {
      setFeedback(`Mauvaise réponse. Bonne réponse : ${question.answer}`);
    }

    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
      setIsAnswered(false);
      setFeedback("");
      setTimeLeft(10);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <main className="quiz-page">
        <div className="quiz-topbar">
          <h1 className="brand">WIKILEARN</h1>
        </div>

        <section className="quiz-header">
          <div className="quiz-header__row">
            <span>Quiz terminé</span>
            <span>{xp} XP</span>
          </div>

          <div className="progress-bar">
            <div className="progress-bar__fill" style={{ width: "100%" }} />
          </div>
        </section>

        <section className="quiz-container">
          <div className="question-box">
            <h2>{quiz.title}</h2>
          </div>

          <div className="quiz-result">
            <p>
              Score : {score} / {questions.length}
            </p>
            <p>XP gagné : {xp}</p>
          </div>

          <Link href="/" className="next-button">
            Retour à l’accueil
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="quiz-page">
      <div className="quiz-topbar">
        <h1 className="brand">WIKILEARN</h1>
      </div>

      <section className="quiz-header">
        <div className="quiz-header__row">
          <span>
            Question {currentQuestion + 1} sur {questions.length}
          </span>
          <span>{xp} XP</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-bar__fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="timer-box">Temps restant : {timeLeft}s</div>
      </section>

      <section className="quiz-container">
        <div className="question-box">
          <h2>{question.question}</h2>
        </div>

        <div className="answers-list">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option;

            return (
              <button
                key={option}
                className={`answer-button ${isSelected ? "answer-button--selected" : ""}`}
                onClick={() => setSelectedAnswer(option)}
                disabled={isAnswered}
              >
                <span>{option}</span>
                <span className="answer-circle" />
              </button>
            );
          })}
        </div>

        {feedback && <p className="quiz-feedback">{feedback}</p>}

        {!isAnswered ? (
          <button className="next-button" onClick={handleValidate}>
            Valider
          </button>
        ) : (
          <button className="next-button" onClick={handleNext}>
            Suivant
          </button>
        )}
      </section>
    </main>
  );
}