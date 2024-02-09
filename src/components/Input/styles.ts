import styled from "styled-components";

export const InputBootstrap = styled.label`
  width: 100%;
  max-width: 360px;
  border-radius: 6px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 3px solid ${({ theme }) => theme.colors.text};
  font-weight: bold;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  display: flex;
  justify-content: stretch;
  align-items: center;

  input {
    margin: 0;
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[1]};
    flex: 1;
    border: 0;
    background: transparent;
    outline: 0;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1em;
  }

  .adornment {
    font-weight: lighter;
    font-size: 1rem;
  }
`