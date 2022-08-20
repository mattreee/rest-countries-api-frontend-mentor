import styled from "styled-components";

const BorderItemStyles = styled.span`
   background-color: ${props => props.theme.backgroundColor};
   padding: .1em 1em;
   border-radius: 3px;
   box-shadow: 0 1px 5px 0px rgba(0,0,0, .2);
   cursor: pointer;
`;

export { BorderItemStyles };