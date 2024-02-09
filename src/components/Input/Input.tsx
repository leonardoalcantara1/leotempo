import React from "react";
import { InputBootstrap } from "./styles";

export interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'number' | 'search' | 'email' | 'url'
}

const Input: React.FC<IInput> = ({ ...props }) => {
  return (
    <InputBootstrap>
      <span className="adornment">
        {'> '}
      </span>
      <input type="text" {...props} />
    </InputBootstrap>
  );
}

export default Input;
