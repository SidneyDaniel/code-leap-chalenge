import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id: string;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, id, autoFocus }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-black text-base">
        {label}
      </label>
      <input
        id={id}
        type="text"
        autoFocus={autoFocus}
        placeholder={placeholder}
        className="border text-black border-codeleap-gray rounded-lg p-2 focus:ring-1 focus:ring-codeleap-blue outline-none transition-all duration-300 placeholder:text-codeleap-gray"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
