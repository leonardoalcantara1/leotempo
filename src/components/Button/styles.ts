import styled from "styled-components";
import Color from 'color';

export const ButtonBootstrap = styled.button`
  width: 100%;
  max-width: 360px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[1]};
  cursor: pointer;
  box-shadow: 0px 4px 0px ${({ theme }) => Color(theme.colors.primary).darken(0.3).hex()};
  transition: .3s;
  user-select: none;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.2);
  border: 0;
  text-align: left;
  &:active {
    transform: translateY(4px);
    box-shadow: 0px 0px 0px;
  }
  .adornment {
    font-weight: lighter;
  }
`