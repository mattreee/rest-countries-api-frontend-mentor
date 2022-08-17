import styled from "styled-components";

export const ListItemStyles = styled.li`
   background-color: ${props => props.theme.backgroundColor};
   width: fit-content;
   box-shadow: 0 5px 5px 0 rgba(0,0,0, .2);
   border-radius: 0 0 7px 7px;
   cursor: pointer;
   transition: 100ms;

   &:hover {
      transform: scale(1.02);
   }
   
   img {
      max-width: 250px;
      aspect-ratio: 2 / 1.2;

      border-radius: 7px 7px 0 0;
   }

   .card__container {
      padding: 0 2em;
      padding-top: 0;
   }   

   .card__title {
      padding: .8em 0;
   }

   .card__description-ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: .5rem;

      padding-bottom: 3em;
   }

   .card__info {
      font-weight: 600;
   }
`;