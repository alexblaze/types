import React from "react";

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export const Input: React.FC<IInputProps> = ({ className = "", label, ...rest }) => {
  return (
    <div>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <input
        className={`py-2 px-4 rounded border focus:outline-none focus:border-blue-500 ${className}`}
        {...rest}
      />
    </div>
  );
};
