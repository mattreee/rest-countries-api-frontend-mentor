import styled from "styled-components";

export const FilterStyles = styled.div`
   background-color: ${props => props.theme.backgroundColor};
   padding: 1.2em;
   border-radius: 7px;
   position: relative;
   cursor: pointer;
   box-shadow: 0 1px 3px 0 rgba(0,0,0, .2);

   .filter__option {
      display: flex;
      align-items: center;
   }

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
      text-transform: capitalize;

      box-shadow: 2px 1px 7px 0 rgba(0,0,0, .1);
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