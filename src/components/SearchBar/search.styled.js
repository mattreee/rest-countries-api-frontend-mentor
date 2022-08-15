import styled from "styled-components";

export const SearchStyles = styled.div`
   background-color: hsl(209, 23%, 22%);
   display: flex;
   align-items: center;
   border-radius: 5px;

   .material-symbols-outlined {
      border-radius: 5px 0 0 5px;
      padding:  0 .5em;
      padding-left: 1.5em;
   }
   
   .search__input {
      background-color: hsl(209, 23%, 22%);
      width: clamp(100px, 350px, 40vw);
      font-size: 1rem;
      padding: .9em 1em;
      border: none;
      outline: none;
      border-radius: 0 5px 5px 0;
      color: hsl(0, 0%, 100%);
   }
`;