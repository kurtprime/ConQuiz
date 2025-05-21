"use server";

import { QuizDocument } from "../interface/quiz.inter";
import User from "../models/user.model";
import { connectToDatabase } from "../mongoose";
import mongoose, { Types } from "mongoose";
import Quiz from "../models/quiz.model";

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
      .populate({
        path: "quizCreated",
        model: Quiz,
        options: { sort: { createdAt: -1, score: 1 } },
      })
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

export async function getUserNote(userId: string, noteId: string) {
  try {
    connectToDatabase();
    const note = await User.findOne(
      { userId, "notes._id": new mongoose.Types.ObjectId(noteId) },
      {
        "notes.$": 1, // Projection to return only the matching note
      }
    );

    return note.notes[0][0];
  } catch (error: any) {
    console.error("failed to get a single note ", error);
    throw new Error("Failed to get a user NOTE error ", error);
  }
}

export async function getUserNotes(userId: string) {
  try {
    await connectToDatabase();
    const user: any = await User.findOne({ userId }).lean();
    const notes = user?.notes || [];

    return notes;
  } catch (error: any) {
    console.error("failed to get NOTES ", error);
    throw new Error("Failed to get the user NOTES ", error);
  }
}

export async function addUserNote({
  userId,
  title,
  content,
}: {
  userId: string;
  title: string;
  content: string;
}) {
  try {
    connectToDatabase();
    await User.findOneAndUpdate(
      { userId },
      { $push: { notes: { title: title, content: content } } }
    );
  } catch (error: any) {
    console.error("failed to add note to the user ", error);
    throw new Error("Failed to add note ", error);
  }
}

export async function updateUserNote({
  userId,
  noteId,
  title,
  content,
}: {
  userId: string;
  noteId: string;
  title: string;
  content: string;
}) {
  try {
    await connectToDatabase();
    await User.findOneAndUpdate(
      { userId, "notes._id": noteId },
      { $set: { "notes.$.title": title, "notes.$.content": content } }
    );
  } catch (error: any) {
    console.error("failed to update NOTES ", error);
    throw new Error("Failed to update NOTES ", error);
  }
}
