
import mongoose from 'mongoose';
const { v4: uuidv4 } = require('uuid');

const quizSchema = new mongoose.Schema({
    id: {
    type: String,
    default: () => uuidv4(),
    required: true
  },
  quizzes: [{
    question: {
      type: String,
      required: true
    },
    multipleChoices: {
      type: [String],
      required: true,
      validate: {
        validator: function(v: any) {
          return v.length >= 4; // At least 2 choices required
        },
        message: (props: any) => `Multiple choices must have at least 2 items, got ${props.value.length}`
      }
    },
    correctAnswer: {
      type: Number,
      required: true,
      validate: {
        validator: function(v: any) {
          return v >= 0 && v < 4; // Must be a valid index
        },
        message: (props: any) => `Correct answer index ${props.value} is out of bounds`
      }
    }
  }]
});
const Quiz =
  mongoose.models.Quiz || mongoose.model('Quiz', quizSchema);

export default Quiz;