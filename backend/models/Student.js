const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    qualification: { type: String, required: true },
    graduationYear: { type: Number, required: true },
    about: { type: String },
    certifications: { type: [String] },
    projects: { type: [String] },
    skills: { type: [String], required: true },
    software: { type: [String] },
    resume: { type: String },
    experience: { type: Number, default: 0 },
    softSkills: { type: [String] }
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
