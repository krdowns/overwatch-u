import React from 'react';

import { HeroCardContainer } from './hero-card.styles';

const HeroCard = ({ children, ...props }) => (
  <HeroCardContainer {...props}>{children}
  </HeroCardContainer>
);

export default HeroCard;
