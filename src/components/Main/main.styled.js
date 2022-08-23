import styled from "styled-components"

export const MainStyles = styled.div`
   padding: 0 7vw;

   .main__filter-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3em 0;

      @media screen and (max-width: 800px) {
         flex-direction: column;
         gap: 2.5rem;
      }
   }
`;