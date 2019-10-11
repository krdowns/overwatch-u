import React from 'react';

import HeroCard from '../../components/hero-card/hero-card.component';
import { HeroesPageContainer } from './heroespage.styles';

const HeroesPage = () => (
    <HeroesPageContainer>
        <HeroCard />
    </HeroesPageContainer>
);

export default HeroesPage;