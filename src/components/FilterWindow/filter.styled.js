import styled from "styled-components";

export const FilterStyles = styled.div`
   background-color: ${props => props.theme.backgroundColor};
   padding: 1.2em;
   border-radius: 7px;
   position: relative;
   cursor: pointer;

   .filter__text {
      margin-right: 1rem;
      font-weight: 600;
   }

   .filter__drop-content {
      display: none;
      position: absolute;
      background-color: ${props => props.theme.backgroundColor};
      width: 100%;
      padding: 1em 0;
      top: calc(100% + .2rem);
      left: 0;
      border-radius: 5px;
   }

   .filter__drop-option {
      padding-left: 1rem;
      
      font-weight: 600;
   }

   .filter__drop-option + .filter__drop-option {
      margin-top: .5rem;
   }

   &:hover .filter__drop-content {
      display: block
   }
`;