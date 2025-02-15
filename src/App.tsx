import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from "./pages/StudentForm";
import AdminDashboard from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLoginPage";
import QuizPage from "./pages/Quize";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/studentdetails" element={<StudentForm />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
