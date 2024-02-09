import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`

export const ForecastsActions = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[2]} 0;
`