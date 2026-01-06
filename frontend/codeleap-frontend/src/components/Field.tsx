import React from 'react';

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id: string;
  type?: 'text' | 'textarea';
}

const Field: React.FC<FieldProps> = ({ label, value, onChange, placeholder, id, type = 'text' }) => {
  const baseClass = "border text-black border-codeleap-gray rounded-lg p-2 focus:ring-1 focus:ring-codeleap-blue outline-none transition-all duration-300 placeholder:text-[#CCCCCC]";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-black text-base font-normal">
        {label}
      </label>
      
      {type === 'text' ? (
        <input
          id={id}
          className={baseClass}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <textarea
          id={id}
          className={`${baseClass} min-h-30 resize-none`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default Field;