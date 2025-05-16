export interface QuizInter {
  title: string;
  quizzes: [
    {
      question: string;
      multipleChoices: [string];
      correctAnswer: string;
    }
  ];
}

export interface QuizDocument {
  _id: string;
  id: string;
  title: string;
  quizzes: Array<{
    question: string;
    multipleChoices: string[];
    correctAnswer: string;
  }>;
  score: number | null;
}
