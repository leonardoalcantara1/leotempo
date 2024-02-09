import React, { useCallback } from "react";
import { ButtonBootstrap } from "./styles";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
}

let timeout: string | number | NodeJS.Timeout | undefined;
const debounce = (func: React.MouseEventHandler<HTMLButtonElement>) => {
  clearTimeout(timeout);
  timeout = setTimeout(func, 300);
}

const Button: React.FC<IButton> = ({ onClick = () => {}, secondary, children, ...props }) => {
  const resolveAnimation = useCallback(() => {
    debounce(onClick);
  }, [onClick])

  return (
    <ButtonBootstrap onClick={resolveAnimation} $secondary={secondary} {...props}>
      {
        !secondary && (
          <span className="adornment">
            {'> '}
          </span>
        )
      }
      <span className="label">
        {children}
      </span>
      {
        secondary && (
          <span className="adornment">
            {' <'}
          </span>
        )
      }
    </ButtonBootstrap>
  );
}

export default Button;
