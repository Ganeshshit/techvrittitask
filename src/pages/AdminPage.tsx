import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [quizResults, setQuizResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentResponse = await fetch("https://api.example.com/students");
        const studentData = await studentResponse.json();

        const quizResponse = await fetch(
          "https://api.example.com/quiz-results"
        );
        const quizData = await quizResponse.json();

        setStudents(studentData);
        setQuizResults(quizData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg mt-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h2>
      <p className="text-center mb-4">Welcome, Admin!</p>

      {loading ? (
        <div className="text-center text-xl font-semibold animate-pulse">
          Loading...
        </div>
      ) : (
        <>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Student Information</h3>
            <table className="w-full border-collapse border border-white">
              <thead>
                <tr className="bg-white text-black">
                  <th className="border border-white p-2">Name</th>
                  <th className="border border-white p-2">Email</th>
                  <th className="border border-white p-2">Mobile</th>
                  <th className="border border-white p-2">Qualification</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className="bg-gray-100 text-black">
                    <td className="border border-white p-2">{student.name}</td>
                    <td className="border border-white p-2">{student.email}</td>
                    <td className="border border-white p-2">
                      {student.mobile}
                    </td>
                    <td className="border border-white p-2">
                      {student.qualification}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Quiz Results</h3>
            <table className="w-full border-collapse border border-white">
              <thead>
                <tr className="bg-white text-black">
                  <th className="border border-white p-2">Student Name</th>
                  <th className="border border-white p-2">Score</th>
                  <th className="border border-white p-2">Total Questions</th>
                  <th className="border border-white p-2">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {quizResults.map((result, index) => (
                  <tr key={index} className="bg-gray-100 text-black">
                    <td className="border border-white p-2">
                      {result.studentName}
                    </td>
                    <td className="border border-white p-2">{result.score}</td>
                    <td className="border border-white p-2">
                      {result.totalQuestions}
                    </td>
                    <td className="border border-white p-2">
                      {((result.score / result.totalQuestions) * 100).toFixed(
                        2
                      )}
                      %
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </motion.div>
  );
};
export default AdminDashboard;