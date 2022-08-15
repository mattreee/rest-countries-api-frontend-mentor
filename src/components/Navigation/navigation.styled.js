import styled from "styled-components";

export const NavigationStyles = styled.nav`
   background-color: hsl(209, 23%, 22%);
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1em 7vw;

   .nav__theme-button {
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: .5rem;
      fill: white;
   }
`;