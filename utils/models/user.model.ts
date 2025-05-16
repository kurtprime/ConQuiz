import mongoose, { Schema, model, models } from "mongoose";

const NoteSchema = new Schema({
  title: {
    type: String,
    required: [true, "Note title is required"],
    trim: true,
    maxlength: [100, "Title cannot exceed 100 characters"],
  },
  content: {
    type: String,
    required: [true, "Note content is required"],
    trim: true,
    maxlength: [2000, "Content cannot exceed 2000 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  quizCreated: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
  ],
  notes: [
    {
      type: [NoteSchema],
      default: [],
    },
  ],
});

const User = models.User || model("User", UserSchema);
export default User;
