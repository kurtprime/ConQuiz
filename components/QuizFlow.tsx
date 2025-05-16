// components/QuizFlow.tsx
"use client";
import { useEffect, useState } from "react";
import Question from "./Question";
import { updateQuizScore } from "@/utils/action/quiz.action";
import Link from "next/link";

interface QuizFlowProps {
  quiz: {
    id: string;
    quizzes: Array<{
      _id: string;
      question: string;
      multipleChoices: string[];
      correctAnswer: string;
    }>;
  };
  userId: string;
}

export default function QuizFlow({ quiz, userId }: QuizFlowProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const currentQuestion = quiz.quizzes[currentQuestionIndex];
  const totalQuestions = quiz.quizzes.length;

  const handleAnswerSelect = (selectedQuestion: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion._id]: selectedQuestion,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
    console.log(userAnswers[currentQuestion._id]);
  };

  useEffect(() => {
    const calculateAndSaveScore = async () => {
      const calculatedScore = quiz.quizzes.reduce((acc, question) => {
        const userAnswer = userAnswers[question._id];
        return userAnswer === question.correctAnswer ? acc + 1 : acc;
      }, 0);

      await updateQuizScore(quiz.id, calculatedScore);
      setScore(calculatedScore);
      setLoading(false);
    };

    calculateAndSaveScore();
  }, [quiz, userAnswers]);

  if (showResults) {
    return (
      <div className="w-full max-w-2xl mx-auto my-auto">
        <h2 className="text-2xl text-center font-bold mb-4">Quiz Results</h2>
        <p className="text-xl text-center pb-10">
          {loading
            ? "Calculating Score"
            : `Score: ${score} / ${totalQuestions}`}
        </p>
        <Link className="btn btn-active mr-15" href={"/quiz"}>
          Done
        </Link>

        <Link href={"/quiz/create"} className="btn btn-active btn-primary">
          Create Quiz
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-auto">
      <Question
        quest={currentQuestion}
        selectedAnswer={userAnswers[currentQuestion._id]}
        onAnswerSelect={handleAnswerSelect}
      />
      <div className="flex justify-between mt-6">
        <span>
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
        <button
          onClick={handleNext}
          disabled={!userAnswers[currentQuestion._id]}
          className="btn btn-primary"
        >
          {currentQuestionIndex < totalQuestions - 1 ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
}
