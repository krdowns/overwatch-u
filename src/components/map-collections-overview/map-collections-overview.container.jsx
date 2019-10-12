import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import {selectIsCollectionFetching } from '../../redux/maps-directory/maps-directory.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import MapCollectionsOverview from './map-collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const MapCollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(MapCollectionsOverview);

export default MapCollectionsOverviewContainer;