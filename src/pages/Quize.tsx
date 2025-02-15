import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
};

type Answers = Record<number, string>;
const QuizPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(30);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=20&category=11&difficulty=medium&type=multiple"
        );
        const data = await response.json();
        const formattedQuestions = data.results.map(
          (q: any, index: number) => ({
            id: index + 1,
            question: q.question,
            options: [...q.incorrect_answers, q.correct_answer].sort(
              () => Math.random() - 0.5
            ),
            correct: q.correct_answer,
          })
        );
        setQuestions(formattedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          nextQuestion();
        }
        return prevTime > 0 ? prevTime - 1 : 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestion]);

  useEffect(() => {
    setTimeLeft(30); // Reset timer for each new question
  }, [currentQuestion]);

  const handleAnswer = (option: string): void => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const nextQuestion = (): void => {
    if (!(currentQuestion in answers)) {
      setAnswers({ ...answers, [currentQuestion]: "" }); // Assign empty answer if not selected
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = (): number => {
    return questions.reduce((score, q, index) => {
      return answers[index] === q.correct ? score + 1 : score;
    }, 0);
  };

  if (loading) {
    return (
      <motion.div className="text-center text-xl p-10 animate-pulse">
        Loading Quiz...
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-md mt-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center mb-6">Quiz</h2>
      {!showResults ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              {questions[currentQuestion].question}
            </h3>
            <span className="text-red-500 font-bold">
              Time Left: {timeLeft}s
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`p-3 border rounded-lg text-lg font-medium hover:bg-blue-500 hover:text-white transition-all ${
                  answers[currentQuestion] === option
                    ? "bg-blue-300"
                    : "bg-gray-100"
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={nextQuestion}
            className="mt-4 w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
          <p className="text-lg">
            Your Score: {calculateScore()} / {questions.length}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default QuizPage;
