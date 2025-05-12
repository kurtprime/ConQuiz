// components/Question.tsx
'use client';

interface Questions {
  quest: {
    _id: string;
    question: string;
    multipleChoices: string[];
    correctAnswer: number;
  };
  selectedAnswer: number | undefined;
  onAnswerSelect: (selectedIndex: number) => void;
}

function Question({ quest, selectedAnswer, onAnswerSelect }: Questions) {
  return (
    <div className="mb-8">
      <h1 className="text-xl font-bold mb-4">{quest.question}</h1>
      <div className="grid grid-cols-1 gap-2">
        {quest.multipleChoices.map((choice, j) => {
          const isCorrect = j === quest.correctAnswer;
          const isSelected = j === selectedAnswer;
          
          return (
            <button
              key={`choice-${quest._id}-${j}`}
              className={`btn w-full opacity-90 
                ${selectedAnswer !== undefined && isCorrect ? 'btn-accent' : ''}
                ${isSelected && !isCorrect ? 'btn-error' : ''}
                ${isSelected ? 'btn-active' : ''}
                ${selectedAnswer !== undefined ? 'cursor-not-allowed' : 'cursor-pointer'}
              `}
              onClick={() => {
                if(!(selectedAnswer !== undefined)) onAnswerSelect(j)
                }}
              
            >
              {choice}
              {selectedAnswer !== undefined && isCorrect && (
                <span className="ml-2">✓</span>
              )}
              {isSelected && !isCorrect && (
                <span className="ml-2">✗</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;