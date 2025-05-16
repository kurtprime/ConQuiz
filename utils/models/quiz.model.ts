import mongoose from "mongoose";
const { v4: uuidv4 } = require("uuid");

const quizSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: () => uuidv4(),
      required: true,
    },
    userId: { type: String },
    title: { type: String },
    quizzes: [
      {
        question: {
          type: String,
          required: true,
        },
        multipleChoices: {
          type: [String],
          required: true,
        },
        correctAnswer: {
          type: String,
          required: true,
        },
      },
    ],
    score: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);
const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);

export default Quiz;
