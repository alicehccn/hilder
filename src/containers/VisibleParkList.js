import { connect } from 'react-redux';
import { SHOW_FEATURED } from '../actions/actions';
import ParkList from '../components/ParkList';

const getVisibleParks = (parks, filter) => {
  switch (filter) {
    case 'SHOW_FEATURED':
      return parks.filter(park => park.featured);
    default:
      return parks;
  }
};

const mapStateToProps = state => {  
  return {
    parks: getVisibleParks(state.parks)
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
