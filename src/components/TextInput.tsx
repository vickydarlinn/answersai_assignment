import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const TextInput: React.FC<InputProps> = ({ className = "", ...props }) => {
  const textInputClasses = `
    rounded bg-primary border border-border text-primary-foreground hover:bg-primary/90 px-3 py-1 focus:outline-none w-full h-9
    ${className}
  `;

  return <input type="text" className={textInputClasses} {...props} />;
};

export default TextInput;
