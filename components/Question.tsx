// components/Question.tsx
"use client";

interface Questions {
  quest: {
    _id: string;
    question: string;
    multipleChoices: string[];
    correctAnswer: string;
  };
  selectedAnswer: string | undefined;
  onAnswerSelect: (selectedIndex: string) => void;
}

function Question({ quest, selectedAnswer, onAnswerSelect }: Questions) {
  return (
    <div className="mb-8">
      <h1 className="text-xl font-bold mb-4">{quest.question}</h1>
      <div className="grid grid-cols-1 gap-2">
        {quest.multipleChoices.map((choice, j) => {
          const isCorrect = choice === quest.correctAnswer;
          const isSelected = choice === selectedAnswer;

          return (
            <button
              key={`choice-${quest._id}-${j}`}
              className={`btn w-full opacity-90 h-fit py-3
                ${selectedAnswer !== undefined && isCorrect ? "btn-accent" : ""}
                ${isSelected && !isCorrect ? "btn-error" : ""}
                ${isSelected ? "btn-active" : ""}
                ${
                  selectedAnswer !== undefined
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }
              `}
              onClick={() => {
                if (!(selectedAnswer !== undefined)) onAnswerSelect(choice);
              }}
            >
              {choice}
              {selectedAnswer !== undefined && isCorrect && (
                <span className="ml-2">✓</span>
              )}
              {isSelected && !isCorrect && <span className="ml-2">✗</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
