import React, { useState } from "react";
import { motion } from "framer-motion";
import InputField from "./InputField";
import FileUpload from "./FileUpload";
import TextArea from "./textArea";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [skillInput, setSkillInput] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    qualification: "",
    graduationYear: "",
    about: "",
    certifications: "",
    projects: "",
    skills: [],
    software: "",
    resume: null,
    experience: "",
    softSkills: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillInput(e.target.value);
  };

  const addSkill = () => {
    if (skillInput && !formData.skills.includes(skillInput)) {
      setFormData({ ...formData, skills: [...formData.skills, skillInput] });
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student Data Submitted:", formData);

    // Simulating form submission delay
    setTimeout(() => {
      navigate("/quiz"); // Redirect to Quiz Page
    }, 500);
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-md mt-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Student Information Form
      </h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Mobile Number"
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <InputField
          label="Qualification"
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
        />
        <InputField
          label="Graduation Year"
          type="text"
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleChange}
        />
        <TextArea
          label="About the Student"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />
        <TextArea
          label="Certifications Done"
          name="certifications"
          value={formData.certifications}
          onChange={handleChange}
        />
        <TextArea
          label="Project Details"
          name="projects"
          value={formData.projects}
          onChange={handleChange}
        />

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Known Skills
          </label>
          <input
            type="text"
            value={skillInput}
            onChange={handleSkillChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Search or add skill"
          />
          <button
            type="button"
            onClick={addSkill}
            className="mt-2 px-3 py-2 bg-blue-500 text-white rounded"
          >
            Add Skill
          </button>
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 rounded-lg text-sm cursor-pointer"
                onClick={() => removeSkill(skill)}
              >
                {skill} ✕
              </span>
            ))}
          </div>
        </div>

        <TextArea
          label="Known Software"
          name="software"
          value={formData.software}
          onChange={handleChange}
        />
        <FileUpload
          label="Upload Resume (PDF)"
          name="resume"
          onChange={handleFileChange}
        />
        <InputField
          label="Experience (in years)"
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />
        <TextArea
          label="Soft Skills (Optional)"
          name="softSkills"
          value={formData.softSkills}
          onChange={handleChange}
        />

        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Form;
