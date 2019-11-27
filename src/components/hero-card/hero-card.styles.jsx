import styled from 'styled-components';

export const HeroCardContainer = styled.image`
  min-width: 50px;
  width: 100vw;
  max-height: 250px;
  height: auto;
  background-image: linear-gradient(0deg, #e5efff, #c4cdff);
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-family: 'Futura';
  font-weight: light;
  font-style: italic;
  color: #DDD;
  font-size: 4em;
  overflow-y: hidden;
  // margin: 0 auto;
`;

export const HeroTextContainer = styled.div`
  background-color: #314666;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

