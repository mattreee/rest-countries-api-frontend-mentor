import styled from "styled-components";

const CountryStyles = styled.section`
   font-size: 16px;
   display: flex;
   flex-direction: column;

   .country{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      margin-bottom: 10rem;
      align-items: center;

      @media screen and (max-width: 800px) {
         grid-template-columns: 1fr;
         gap: 0;
         margin: 0;
         margin-bottom: 5rem;
      }

      &__flag {
         width: 100%;
      }
      
      &__desc {
         width: 100%;
         display: grid;
         grid-template-areas: 
            "title title title"
            "column-one column-two column-two"
            "border-countries border-countries border-countries";
         grid-template-rows: 1fr 2fr 1fr;

         @media screen and (max-width: 800px) {
            grid-template-areas: 
               "title"
               "column-one"
               "column-two"
               "border-countries";
         }

         &-title {
            font-size: 2rem;
            grid-area: title;
            align-self: end;

            @media screen and (max-width: 800px) {
               margin: 2rem 0;
            }
         }

         &-col {
            margin-top: 3rem;
            display: flex;
            flex-direction: column;
            gap: .5rem;

            @media screen and (max-width: 800px) {
               margin: 0;
            }
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

            @media screen and (max-width: 800px) {
               margin-top: 2rem;
            }
         }

         @media screen and (max-width: 800px) {
            .borders {
               display: inline-block;
               width: 100%;
            }
         }
      }
   }
`;

export { CountryStyles };