import styled from 'styled-components';

export const MapCardContainer = styled.div`
  min-width: 50px;
  margin-left: 5%;
  width: 100%;
  max-height: 500px;
  height: auto;
  background-image: linear-gradient(0deg, #e5efff, #c4cdff);
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: 'Futura';
  font-weight: light;
  font-style: italic;
  color: #EEE;
  overflow-y: hidden; 
  -webkit-transition: transform .5s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const MapTextContainer = styled.div`
  background-color: #314666;
  padding: 0px 50px;
  // border: 2px solid red;
  font-size: 24px;
  text-align: center;
`;

export const MapImageContainer = styled.div`
  // border: 2px solid blue;
  display: flex;
  justify-content: center;
  // align-content: center;
  // width; 50%;
  // object-fit: cover;
  img {
    width: 100%;
    // border: 2px solid blue;
  }
`;

