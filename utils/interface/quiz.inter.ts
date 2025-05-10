export interface QuizInter{
    quizzes:[
        {
            question: string;
            multipleChoices: [string];
            correctAnswer: number;
        }
    ]
}
