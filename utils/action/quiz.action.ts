'use server'

import { QuizInter } from "../interface/quiz.inter";
import Quiz from "../models/quiz.model";
import { connectToDatabase } from "../mongoose";
import { v4 as uuidv4 } from 'uuid';

export async function createQuiz(
    quizzes: QuizInter,
){   
    try {
        connectToDatabase()
        const id = uuidv4()
        //console.log(quizzes)
        // Create new quiz document
        const newQuiz = await Quiz.create({
            id:id,
            quizzes: quizzes.quizzes.map(quiz => ({
                question: quiz.question,
                multipleChoices: quiz.multipleChoices,
                correctAnswer: quiz.correctAnswer
            }))
        });

        return id;
    } catch (error: any) {
        console.log(error)
        throw new Error("Error" , error.message)
    }
}

export async function getQuizById(quizId: string){
    try {
        connectToDatabase()
        const quiz = await Quiz.findOne({id: quizId})
        //console.log("QUIZ REQUEST " ,quiz)
        return quiz;
    } catch (error: any) {
        console.error("Error bro", error)
    }
}