import React, { PropsWithChildren, useCallback } from "react";
import { ButtonBootstrap } from "./styles";

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {}

let timeout: string | number | NodeJS.Timeout | undefined;
const debounce = (func: React.MouseEventHandler<HTMLButtonElement>) => {
  clearTimeout(timeout);
  timeout = setTimeout(func, 300);
}

const Button: React.FC<PropsWithChildren<IButton>> = ({ onClick = () => {}, children, ...props }) => {
  const resolveAnimation = useCallback(() => {
    debounce(onClick);
  }, [onClick])

  return (
    <ButtonBootstrap onClick={resolveAnimation} {...props}>
      <span className="adornment">
        {'> '}
      </span>
      {children}
    </ButtonBootstrap>
  );
}

export default Button;
