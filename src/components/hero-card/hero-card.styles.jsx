import styled from 'styled-components';

export const HeroCardContainer = styled.image`
  min-width: 50px;
  width: 33vw;
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
  // border: 2px solid red;
  font-size: 32px;
`;

export const HeroImageContainer = styled.div`
  // border: 2px solid blue;
  display: flex;
  justify-content: center;
  align-content: center;
  img {
    padding: 12.5px 0px;
    justify-content: center;
    width: 40%;
    height: 100%;
    // border: 2px solid blue;
  }
`;

