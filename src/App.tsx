import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from "./pages/StudentForm";
import AdminDashboard from "./pages/AdminPage";
import QuizPage from "./pages/Quize";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentForm />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
