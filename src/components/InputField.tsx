//const InputField = () => (
import React from 'react'
import { motion } from 'framer-motion'
interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange }) => {
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
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white"
      required
    />
  </motion.div>
  )
}

export default InputField