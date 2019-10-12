import styled from 'styled-components';

export const MapCollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MapCollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const MapCollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;
