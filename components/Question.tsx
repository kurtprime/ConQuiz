'use client'

import { useState } from 'react';
import { QuizInter } from '@/utils/interface/quiz.inter';

interface Questions {
    quest: {
        question: string;
        multipleChoices: [string];
        correctAnswer: number
    }
    i: number;
}

function Question({quest, i}:Questions) {
    const [userAnswer, setUserAnswer] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const correctAnswer = quest.correctAnswer;

    return (
        <div key={i} className="mb-8">
            <h1 className="text-xl font-bold mb-4">{quest.question}</h1>
            <div className="grid grid-cols-1 gap-2">
                {quest.multipleChoices.map((choice:any, j: number) => (
                    <button 
                        key={j}
                        className={`btn  w-full ${j === correctAnswer && 'btn-accent'} ${(j === correctAnswer) && userAnswer && 'btn-warning'  }`}
                        disabled={disabled}
                        onClick={()=>{
                            setUserAnswer(true)
                            setDisabled(true)
                        }}   
                    >
                        {choice}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question