import React from "react";
import { motion } from "framer-motion";

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const textArea: React.FC<TextAreaProps> = ({ label, name, value, onChange }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white"
        rows={3}
      ></textarea>
    </motion.div>
  );
};

export default textArea;
