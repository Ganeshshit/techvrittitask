import React from "react";
import { motion } from "framer-motion";

const FileUpload = ({ label, name, onChange }: { label: string; name: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="w-full bg-white border border-gray-300 rounded-lg"
        accept=".pdf"
        required
      />
    </motion.div>
  );
};

export default FileUpload;
