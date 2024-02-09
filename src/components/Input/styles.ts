import styled from "styled-components";

export const InputBootstrap = styled.div`
  width: 100%;
  max-width: 360px;
  border-radius: 6px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 3px solid ${({ theme }) => theme.colors.text};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[1]};

  .adornment {
    font-weight: lighter;
  }
`