import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MapCollectionPreview from '../map-collection-preview/map-collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/maps-directory/maps-directory.selectors';
import { MapCollectionsOverviewContainer } from './map-collections-overview.styles';

const MapCollectionsOverview = ({ collections }) => (
  <MapCollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <MapCollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </MapCollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(MapCollectionsOverview);
