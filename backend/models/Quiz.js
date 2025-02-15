const mongoose = require("mongoose");

const QuizResultSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    responses: [
        {
            questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
            selectedAnswer: { type: String, required: true },
            isCorrect: { type: Boolean, required: true }
        }
    ],
    score: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("QuizResult", QuizResultSchema);
