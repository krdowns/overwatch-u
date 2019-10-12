import React from 'react';

import { MapCardContainer } from './map-card.styles';

const MapCard = ({ children, ...props }) => (
  <MapCardContainer {...props}>{children}
  </MapCardContainer>
);

export default MapCard;
