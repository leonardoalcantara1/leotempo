import styled from "styled-components";
import { ButtonBootstrap } from "../../components/Button/styles";
import { InputBootstrap } from "../../components/Input/styles";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing[4]};

  @media (min-width: 769px) {
    ${InputBootstrap} {
      &:first-child {
        margin-right: ${({ theme }) => theme.spacing[1]};
      }
      &:last-child {
        margin-left: ${({ theme }) => theme.spacing[1]};
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    ${InputBootstrap} {
      margin: 0 0 ${({ theme }) => theme.spacing[3]} 0;
      max-width: 100%;
      box-sizing: border-box;
    }
  }
`

export const ForecastsActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[5]} 0 ${({ theme }) => theme.spacing[2]};
  ${ButtonBootstrap} {
    max-width: 33.33%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing[2]} 0;
    ${ButtonBootstrap} {
      max-width: 50%;
    }

    &:nth-of-type(2) {
      ${ButtonBootstrap} {
        max-width: 100%;
        &:first-child {
          order: 1;
        }
        &:last-child {
          order: 0;
          margin-bottom: ${({ theme }) => theme.spacing[3]}
        }
      }
    }
  }
`