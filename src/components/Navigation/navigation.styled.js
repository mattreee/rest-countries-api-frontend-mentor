import styled from "styled-components";

export const NavigationStyles = styled.nav`
   background-color: ${props => props.theme};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2em 7vw;

   box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, .1);

   .nav__theme-button {
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: .5rem;
      cursor: pointer;
   }
`;