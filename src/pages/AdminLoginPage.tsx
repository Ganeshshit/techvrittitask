import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (userId === "admin" && password === "password") {
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg text-black w-96">
        <label className="block text-lg font-medium mb-2">User ID</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg mb-4"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label className="block text-lg font-medium mb-2">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Login
        </button>
      </div>
    </motion.div>
  );
};

export default AdminLogin;