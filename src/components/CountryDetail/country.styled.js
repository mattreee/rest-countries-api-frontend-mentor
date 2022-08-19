import styled from "styled-components";

const CountryStyles = styled.section`
   font-size: 16px;
   display: flex;
   flex-direction: column;

   button {
      align-self: flex-start;
   }

   img {
      max-width: 50%;
   }

   .country__description {
      display: flex;
   }
`;

export { CountryStyles };