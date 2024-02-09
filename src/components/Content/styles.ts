import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ContentBox = styled.div`
  width: 100%;
  max-width: 768px;
  padding: ${({ theme }) => theme.spacing[2]};
`