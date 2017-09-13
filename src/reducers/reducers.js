import { combineReducers } from 'redux';
import { SHOW_FEATURED } from '../actions/actions';

const initialState = {
  parks: [
    {name: 'Green Lake Park', 'features': ['water', 'football', 'bathroom']},
    {name: 'Discovery Park', 'features': ['grass', 'tree', 'sky']},
  ],
}

function parks(state = initialState, action) {
  switch (action.type) {
    case SHOW_FEATURED:
      const feature = action.feature;
      return state.parks.map((park) => {
        if (park.features.includes(feature)) {
          return Object.assign({}, park, {
            featured: true
          });
        }
        return park;
      })
    default:
      return state;
  }
};

const featurePark = combineReducers({
  parks,
})

export default featurePark
