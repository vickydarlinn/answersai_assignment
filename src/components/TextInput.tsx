import React from "react";
import { FaSearch } from "react-icons/fa";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const TextInput: React.FC<InputProps> = ({ className = "", ...props }) => {
  const textInputClasses = `
   flex items-center gap-2 rounded bg-primary border border-border text-primary-foreground  hover:bg-primary/90 px-3 py-1 focus:outline-none w-full h-9
    ${className}
  `;

  return (
    <div className={textInputClasses}>
      <FaSearch />
      <input
        type="text"
        className="border-none outline-none w-full bg-inherit text-inherit placeholder:text-primary-foreground"
        {...props}
      />
    </div>
  );
};

export default TextInput;
