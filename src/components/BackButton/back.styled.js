import styled from "styled-components";

const BackButtonStyles = styled.div`
   background-color: ${props => props.theme.backgroundColor};
   display: flex;
   align-items: center;
   gap: .5em;
   width: fit-content;
   padding: .5em 2em;
   border-radius: 7px;
   box-shadow: 0px 2px 10px 1px rgba(0, 0,0, .2);
   cursor: pointer;

   margin: 4rem 0;
`;


export { BackButtonStyles };