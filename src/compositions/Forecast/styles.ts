import styled from "styled-components";

export const ForecastCard = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing[3]} 0;
  border: 4px solid ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing[2]};
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;

  *:not(.bg) {
    z-index: 1;
  }

  & > div {
    text-align: left;
    flex: 2;
  }

  button {
    flex: 1;
  }

  small {
    font-size: 0.8rem;
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing[1]};
  }

  img.bg {
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    & > div {
      margin-bottom: ${({ theme }) => theme.spacing[3]};
    }
    button {
      max-width: 100%;
    }
  }
`;
