import { connect } from 'react-redux';
import { toggleFeature } from '../actions/actions';
import ParkList from '../components/ParkList';

const getVisibleParks = (parks, filters) => {
  if (filters.length > 0) {
    return parks.filter(park => park.featured);
  }
  return parks;
};

const mapStateToProps = state => {
  return {
    parks: getVisibleParks(state.parks, state.shownFeatures),
    features: state.features,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFeatureClick: feature => {
      dispatch(showFeatured(feature));
    }
  }
};

const VisibleParkList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParkList)

export default VisibleParkList;
