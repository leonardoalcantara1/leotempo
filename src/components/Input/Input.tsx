import React from "react";
import { InputBootstrap } from "./styles";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'number' | 'search' | 'email' | 'url'
  label?: string
}

const Input: React.FC<IInput> = ({ label, ...props }) => {
  return (
    <InputBootstrap>
      <span className="adornment">
        {'> '}
        {label}
      </span>
      <input type="text" {...props} />
    </InputBootstrap>
  );
}

export default Input;
