import React from 'react';

import { HeroCardContainer, HeroTextContainer, HeroImageContainer } from './hero-card.styles';

import data from '../../redux/section/section.data';

export default class HeroCard extends React.Component{
  render() {
    const heroData = data.data.heroes.hero;
      for (let key in heroData) {
        if (heroData.hasOwnProperty(key)) {
          let name = heroData[key].name;
          let image = heroData[key].imageUrl;
          let role = heroData[key].role;
          return <div> 
              <HeroCardContainer>
                <HeroTextContainer>
                  <h2>{name}</h2> 
                  <h5>{role}</h5>
                </HeroTextContainer> 
                <HeroImageContainer>
                <img src={image} alt="ana" />
                </HeroImageContainer>
              </HeroCardContainer>
            </div>;
        }
      }
  }
}


