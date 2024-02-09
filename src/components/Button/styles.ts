import styled from "styled-components";
import Color from 'color';

export const ButtonBootstrap = styled.button<{ $secondary?: boolean }>`
  width: 100%;
  max-width: 360px;
  border-radius: 6px;
  background: ${({ theme, $secondary }) => theme.colors[$secondary ? 'secondary' : 'primary']};
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[1]};
  cursor: pointer;
  box-shadow: 0px 4px 0px ${({ theme, $secondary, disabled }) => (
    disabled
      ? Color(theme.colors.text).darken(0.6).hex()
      : Color(theme.colors[$secondary ? 'secondary' : 'primary']).darken(0.3).hex()
  )};
  transition: .3s;
  user-select: none;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.2);
  border: 0;
  justify-content: ${({ $secondary }) => $secondary ? 'flex-end' : 'flex-start'};
  display: flex;
  align-items: center;
  &:disabled {
    background: ${({ theme }) => Color(theme.colors.text).darken(0.3).hex()};
    color: ${({ theme }) => theme.colors.text};
    cursor: not-allowed;
  }
  &:active {
    transform: translateY(4px);
    box-shadow: 0px 0px 0px;
  }
  .label {
    transform: translateY(1px);
  }
  .adornment {
    font-weight: lighter;
    font-size: 1rem;
    margin: 0 ${({ theme, $secondary }) => !$secondary ? theme.spacing[1] : 0} 0 ${({ theme, $secondary }) => $secondary ? theme.spacing[1] : 0};
  }
`