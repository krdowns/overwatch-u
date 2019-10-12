import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/maps-directory/maps-directory.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import MapsCollectionPage from './maps-collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading:(state) => !selectIsCollectionsLoaded(state)
});

const MapsCollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(MapsCollectionPage);

export default MapsCollectionPageContainer;
