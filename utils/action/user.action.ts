"use server";

import { QuizDocument } from "../interface/quiz.inter";
import User from "../models/user.model";
import { connectToDatabase } from "../mongoose";
import { Types } from "mongoose";

export async function upsertUserQuiz(userId: string, quizId: any) {
  console.log("UPDATING USER", quizId);
  try {
    connectToDatabase();
    const updatedUser = await User.findOneAndUpdate(
      { userId }, // Filter by userId
      {
        $push: { quizCreated: quizId }, // Add quizId to array (prevents duplicates)
        $setOnInsert: {
          // Only set these if creating new document
          userId,
          notes: [],
        },
      },
      {
        upsert: true,
      }
    );
  } catch (error: any) {
    console.error("Error in upsertUserQuiz:", error.message);
    throw new Error("Failed to update user quiz creation record");
  }
}

export async function getUserQuizzes(userId: string) {
  try {
    await connectToDatabase();

    // Find user and populate their quizzes
    const user = await User.findOne({ userId: userId })
      .populate("quizCreated")
      .lean()
      .exec();

    if (!user) {
      console.log("User not found");
      return null;
    }
    console.log(user);
    return user;
  } catch (error: any) {
    console.error("error on getting the Quizzes", error);
    throw new Error("Failed to fetch user quizzes");
  }
}
