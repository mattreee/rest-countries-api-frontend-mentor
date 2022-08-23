import styled from "styled-components";

export const SearchStyles = styled.div`
   background-color: ${props => props.theme.backgroundColor};
   display: flex;
   align-items: center;
   border-radius: 5px;
   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, .2);

   @media screen and (max-width: 800px) {
      align-self: flex-start;
      width: 100%;
   }

   .material-symbols-outlined {
      border-radius: 5px 0 0 5px;
      padding:  0 .5em;
      padding-left: 1.5em;

      @media screen and (max-width: 800px) {
         padding-left: 1em;
      }
   }
   
   .search__input {
      background-color: ${props => props.theme.backgroundColor};
      width: clamp(100px, 350px, 40vw);
      font-size: 1rem;
      padding: .9em 1em;
      border: none;
      outline: none;
      border-radius: 0 5px 5px 0;
      color: ${props => props.theme.color};

      @media screen and (max-width: 800px) {
         width: 100%;
      }
   }
`;