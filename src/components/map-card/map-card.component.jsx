import React from 'react';

import { MapCardContainer, MapTextContainer, MapImageContainer } from './map-card.styles';

import data from '../../redux/section/section.data';

export default class MapCard extends React.Component{
  render() {
    const mapData = data.data.maps.map;
      for (let key in mapData) {
        if (mapData.hasOwnProperty(key)) {
          let name = (mapData[key].name);
          let image = (mapData[key].imageUrl);
          let gameTypes = [(mapData[key].gameType)];
          return <div> 
              <MapCardContainer>
                <MapTextContainer>
                  <h2>{name}</h2> 
                  <h5>{gameTypes}</h5>
                </MapTextContainer> 
                <MapImageContainer>
                <img src={image} alt="ana" />
                </MapImageContainer>
              </MapCardContainer>
            </div>;
        }
      }
  }
}

// const MapCard = ({ children, ...props }) => (
//   <MapCardContainer {...props}>{children}
//   </MapCardContainer>
// );

// export default MapCard;
