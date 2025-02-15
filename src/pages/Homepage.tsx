import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz System</h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/studentdetails")}
          className="bg-green-500 px-6 py-3 text-lg rounded-lg hover:bg-green-600 transition"
        >
          Student
        </button>
        <button
          onClick={() => navigate("/adminlogin")}
          className="bg-yellow-500 px-6 py-3 text-lg rounded-lg hover:bg-yellow-600 transition"
        >
          Admin
        </button>
      </div>
    </motion.div>
  );
};

export default HomePage;
