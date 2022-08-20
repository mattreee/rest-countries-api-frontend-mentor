import styled from "styled-components";

const CountryStyles = styled.section`
   font-size: 16px;
   display: flex;
   flex-direction: column;

   .country{
      display: flex;
      gap: 5rem;
      margin-bottom: 10rem;

      &__flag {
         max-width: 40vw;
      }

      &__desc {
         width: 100%;
         display: grid;
         grid-template-areas: 
            "title title title"
            "column-one column-two column-two"
            "border-countries border-countries border-countries";
         grid-template-rows: 1fr 2fr 1fr;

         &-title {
            font-size: 2rem;
            grid-area: title;
            align-self: end;
         }

         &-col {
            margin-top: 3rem;
            display: flex;
            flex-direction: column;
            gap: .5rem;
         }
         
         &-col-one {
            grid-area: column-one;
         }

         &-col-two {
            grid-area: column-two;
         }

         &-category {
            font-weight: 600;
         }

         &-borders {
            grid-area: border-countries;
            display: flex;
            flex-flow: wrap;
            align-items: center;
            gap: .5rem;
         }
      }
   }
`;

export { CountryStyles };