import styled from "styled-components";

const ErrorStyles = styled.div`
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;

   button {
      background: none;
      border: none;
      outline: none;
      font-size: 1rem;
      text-decoration: underline;
      color: blue;
      cursor: pointer;
      margin-top: .5em;
   }
`;

export { ErrorStyles };