import styled from "styled-components";

export const ListStyles = styled.div`
   font-size: 14px;

   .countries__ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      justify-items: center;
      column-gap: 2rem;
      row-gap: 4rem;

      list-style: none;
      padding: 0;
   }
`;