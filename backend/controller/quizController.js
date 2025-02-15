const Quiz = require("../models/Quiz");
const QuizResult = require("../models/QuizResult");



exports.getQuiz = async (req, res) => {
    try {
        const questions = await Quiz.aggregate([{ $sample: { size: 5 } }]); // Get 5 random questions
        res.status(200).json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch quiz questions" });
    }
};

exports.submitQuiz = async (req, res) => {
    try {
        const { studentId, responses } = req.body;

        let score = 0;
        const evaluatedResponses = [];

        for (const response of responses) {
            const question = await Quiz.findById(response.questionId);
            const isCorrect = question.correctAnswer === response.selectedAnswer;
            if (isCorrect) score++;
            evaluatedResponses.push({
                questionId: response.questionId,
                selectedAnswer: response.selectedAnswer,
                isCorrect
            });
        }

        const quizResult = new QuizResult({
            studentId,
            responses: evaluatedResponses,
            score
        });

        await quizResult.save();

        res.status(201).json({ message: "Quiz submitted successfully", score });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to submit quiz results" });
    }
};
