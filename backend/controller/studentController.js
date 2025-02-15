const Student = require("../models/Student");

exports.addStudent = async (req, res) => {
    try {
        const { fullName, email, mobile, qualification, graduationYear, about, certifications, projects, skills, software, experience, softSkills } = req.body;
        const resumePath = req.file ? req.file.path : null;
        const newStudent = new Student({
            fullName,
            email,
            mobile,
            qualification,
            graduationYear,
            about,
            certifications,
            projects,
            skills,
            software,
            resume: resumePath,
            experience,
            softSkills
        });
        await newStudent.save();
        res.status(201).json({ message: "Student data saved successfully!", student: newStudent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to retrieve students" });
    }
};
