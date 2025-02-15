import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  interface Student {
    id: number;
    name: string;
    email: string;
    mobile: string;
    qualification: string;
  }

  interface QuizResult {
    id: number;
    studentName: string;
    score: number;
    totalQuestions: number;
  }

  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      mobile: "1234567890",
      qualification: "BSc",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      mobile: "0987654321",
      qualification: "MSc",
    },
  ]);

  const [quizResults, setQuizResults] = useState<QuizResult[]>([
    { id: 1, studentName: "John Doe", score: 8, totalQuestions: 10 },
    { id: 2, studentName: "Jane Smith", score: 9, totalQuestions: 10 },
  ]);

  const [loading, setLoading] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [sortByScore, setSortByScore] = useState(false);

  const handleEdit = (student: Student) => {
    setEditingStudent(student);
  };

  const handleSave = () => {
    setStudents(
      students.map((s) => (s.id === editingStudent?.id ? editingStudent : s))
    );
    setEditingStudent(null);
  };

  const handleSort = () => {
    setSortByScore(!sortByScore);
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg mt-6 w-screen h-screen"
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
                  <th className="border border-white p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="bg-gray-100 text-black">
                    <td className="border border-white p-2">{student.name}</td>
                    <td className="border border-white p-2">{student.email}</td>
                    <td className="border border-white p-2">
                      {student.mobile}
                    </td>
                    <td className="border border-white p-2">
                      {student.qualification}
                    </td>
                    <td className="border border-white p-2">
                      <button
                        onClick={() => handleEdit(student)}
                        className="bg-yellow-500 px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {editingStudent && (
            <div className="mt-4 bg-white p-4 text-black rounded">
              <h3 className="font-bold mb-2">Edit Student</h3>
              <input
                type="text"
                value={editingStudent.name}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, name: e.target.value })
                }
                className="border p-2 mb-2 w-full"
              />
              <button
                onClick={handleSave}
                className="bg-green-500 px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Quiz Results</h3>
            <button
              onClick={handleSort}
              className="mb-2 bg-blue-500 px-4 py-2 rounded"
            >
              Sort by Score
            </button>
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
                {(sortByScore
                  ? [...quizResults].sort((a, b) => b.score - a.score)
                  : quizResults
                ).map((result) => (
                  <tr key={result.id} className="bg-gray-100 text-black">
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
