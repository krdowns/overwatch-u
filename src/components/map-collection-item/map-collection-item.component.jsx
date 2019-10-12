import React from 'react';

import {
  MapCollectionItemContainer,
  MapCollectionFooterContainer,
  MapBackgroundImage,
  MapNameContainer,
} from './map-collection-styles.styles';

const MapCollectionItem = ({ item }) => {
  const { name, imageUrl } = item;

  return (
    <MapCollectionItemContainer>
      <MapBackgroundImage className='image' imageUrl={imageUrl} />
      <MapCollectionFooterContainer>
        <MapNameContainer>{name}</MapNameContainer>
      </MapCollectionFooterContainer>
    </MapCollectionItemContainer>
  );
};

export default MapCollectionItem;
