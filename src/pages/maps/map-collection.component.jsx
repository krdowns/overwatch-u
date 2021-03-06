import React from 'react';
import { connect } from 'react-redux';

// import MapCollectionItem from '../../components/map-collection-item/map-collection-item.component';

// import { selectCollection } from '../../redux/section/section.selectors';

import MapCard from '../../components/map-card/map-card.component';

import {
  MapCollectionPageContainer,
  MapCollectionTitle,
  MapCollectionItemsContainer
} from './map-collection.styles';

const MapCollectionPage = ({ collection }) => {
  // const { name, items } = collection;
  return (
    <MapCollectionPageContainer>
      <MapCollectionTitle>
      {/* {name} */}
      </MapCollectionTitle>
      <MapCollectionItemsContainer>
        <MapCard />
        {/* {items.map(item => (
          <MapCollectionItem key={item.id} item={item} />
        ))} */}
      </MapCollectionItemsContainer>
    </MapCollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(MapCollectionPage);
