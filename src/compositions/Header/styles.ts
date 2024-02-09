import styled from "styled-components";
import bg from './bg.jpg';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[2]};
  position: relative;
  background: ${({ theme }) => theme.colors.primary};
  &::before {
    content: ' ';
    background: url(${bg}) no-repeat center;
    background-size: cover;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: .25;
  }  
  .title {
    position: relative;
    z-index: 1;
    font-size: 1.6rem;
    font-weight: 300;
    color: black;
  }
`;
