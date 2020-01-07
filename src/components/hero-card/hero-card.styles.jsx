import styled from 'styled-components';

export const HeroCardContainer = styled.div`
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
  color: #EEE;
  -webkit-transition: transform .5s ease-in-out;
  overflow-y: hidden;

  :hover {
    transform: scale(1.05);
  }
`;

export const HeroTextContainer = styled.div`
  background-color: #314666;
  padding: 0px 50px;
  font-size: 32px;
  text-align: center;
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  // border: 2px solid red;
  img {
    padding: 12.5px 0px;
    justify-content: center;
    height: 100%;
    // border: 2px solid blue;
  }
`;

