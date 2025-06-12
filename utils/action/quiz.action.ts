"use server";

import mongoose from "mongoose";
import { QuizInter } from "../interface/quiz.inter";
import Quiz from "../models/quiz.model";
import { connectToDatabase } from "../mongoose";
import { v4 as uuidv4 } from "uuid";

export async function createQuiz(quizzes: QuizInter, userId: string) {
  try {
    connectToDatabase();
    const id = uuidv4();
    //console.log(quizzes)
    // Create new quiz document
    const { _id } = await Quiz.create({
      id: id,
      userId: userId,
      title: quizzes.title,
      quizzes: quizzes.quizzes.map((quiz) => ({
        question: quiz.question,
        multipleChoices: quiz.multipleChoices,
        correctAnswer: quiz.correctAnswer,
      })),
    });
    console.log(_id.toString());
    return { id, _id: JSON.parse(JSON.stringify(_id)) };
  } catch (error: any) {
    console.log(error);
    throw new Error("Error: ", error.message);
  }
}
export async function deleteQuiz(quizId: string) {
  try {
    // Delete quiz by ID
    const result = await Quiz.deleteOne({
      id: quizId,
    });

    if (result.deletedCount === 0) {
      throw new Error("Quiz not found");
    }

    return { success: true, message: "Quiz deleted successfully" };
  } catch (error) {
    console.error("Error deleting quiz:", error);
    throw new Error("Failed to delete quiz");
  }
}
export async function getQuizById(quizId: string) {
  function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  try {
    connectToDatabase();
    const quizDoc = await Quiz.findOne({ id: quizId });
    if (!quizDoc) return null;

    const quiz = quizDoc.toObject();
    const shuffledQuestions = shuffleArray(quiz.quizzes);

    const randomizedQuiz = {
      ...quiz,
      quizzes: shuffledQuestions.map((question: any) => ({
        ...question,
       
      })),
    };

    console.log("QUIZ RANDOM, ", randomizedQuiz.quizzes);

    return randomizedQuiz;
  } catch (error: any) {
    console.error("Error bro", error);
  }
}
export async function updateQuizScore(quizId: string, score: number) {
  try {
    connectToDatabase();

    await Quiz.findOneAndUpdate(
      { id: quizId },
      {
        $set: {
          score: score,
          updatedAt: new Date(),
        },
      }
    );
  } catch (error: any) {
    console.error("cannot update the Quiz Score ", error);
    throw new Error("failed to update quiz score ", error);
  }
}
