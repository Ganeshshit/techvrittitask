const express = require("express");
const multer = require("multer");
const { addStudent, getStudents } = require("../controller/studentController");
const router = express.Router();
// Configure Multer for file uploads (stores files in 'uploads/' folder)
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Define routes
router.post("/students", upload.single("resume"), addStudent); 
router.get("/students", getStudents);
module.exports = router;
