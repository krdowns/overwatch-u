import React from 'react';

// import data from '../../redux/section/section.data';

import HeroCard from '../../components/hero-card/hero-card.component';
import { HeroesPageContainer } from './heroespage.styles';

export default class HeroesPage extends React.Component{
    render(){
        return(
            <HeroesPageContainer>
                <HeroCard />
            </HeroesPageContainer>
        )
    }
};