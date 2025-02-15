const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");
const quizRoutes = require("./routes/quizRoutes");
const connectDB = require("./db/dbConnection");
connectDB();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", studentRoutes); 
app.use("/api/students", studentRoutes);
app.use("/api/quiz", quizRoutes); 

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
