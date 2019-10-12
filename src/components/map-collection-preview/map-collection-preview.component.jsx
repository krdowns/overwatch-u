import React from 'react';
import { withRouter } from 'react-router-dom';

import MapCollectionItem from '../map-collection-item/map-collection-item.component';

import {
  MapCollectionPreviewContainer,
  MapNameContainer,
  MapPreviewContainer
} from './map-collection-preview.styles';

const MapCollectionPreview = ({ name, items, history, match, routeName }) => (
  <MapCollectionPreviewContainer>
    <MapNameContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {name.toUpperCase()}
    </MapNameContainer>
    <MapPreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <MapCollectionItem key={item.id} item={item} />
        ))}
    </MapPreviewContainer>
  </MapCollectionPreviewContainer>
);

export default withRouter(MapCollectionPreview);
