// components/QuizFlow.tsx
'use client';
import { useState } from 'react';
import Question from './Question';

interface QuizFlowProps {
  quiz: {
    quizzes: Array<{
      _id: string;
      question: string;
      multipleChoices: string[];
      correctAnswer: number;
    }>;
  };
}

export default function QuizFlow({ quiz }: QuizFlowProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quiz.quizzes[currentQuestionIndex];
  const totalQuestions = quiz.quizzes.length;

  const handleAnswerSelect = (selectedIndex: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion._id]: selectedIndex,
    }));

  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
    console.log(userAnswers[currentQuestion._id])
  };

  const calculateScore = () => {
    return quiz.quizzes.reduce((acc, question) => {
      const userAnswer = userAnswers[question._id];
      return userAnswer === question.correctAnswer ? acc + 1 : acc;
    }, 0);
  };

  if (showResults) {
    return (
      <div className="w-full max-w-2xl mx-auto my-auto">
        <h2 className="text-2xl text-center font-bold mb-4">Quiz Results</h2>
        <p className="text-xl text-center">
          Score: {calculateScore()} / {totalQuestions}
        </p>
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
          disabled={!userAnswers[currentQuestion._id] && (userAnswers[currentQuestion._id] !== 0)}
          className="btn btn-primary"
        >
          {currentQuestionIndex < totalQuestions - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
}