import styled from "styled-components";

export const ForecastsContainer = styled.div`
  &.empty {
    padding: ${({ theme }) => theme.spacing[5]} 0;
    text-align: center;
    font-size: 1.5rem;
  }
`

export const ForecastsActions = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[2]} 0;
`