import React from "react";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled: boolean;
    type?: "button" | "submit";
    variant?: 'primary' | 'black' | 'white' | 'success' | 'danger' | 'outline';
    width?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, type = "button", variant = 'primary', width }) => {
  
  const variants = {
    primary: "bg-codeleap-blue text-white",
    black: "bg-black text-white",
    white: "bg-white text-black border border-codeleap-gray",
    success: "bg-codeleap-green text-codeleap-white",
    danger: "bg-codeleap-red text-codeleap-white",
    outline: "bg-none text-codeleap-black border border-codeleap-black"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{width: width || '120px'}}
      className={`
        px-8 py-2 rounded-lg font-bold transition-all duration-300
        ${variants[variant]}
        ${disabled ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
