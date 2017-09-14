import { combineReducers } from 'redux';
import { SHOW_FEATURED } from '../actions/actions';

const initialState = window.__PRELOADED_STATE__
// delete window.__PRELOADED_STATE__

function parks(state = initialState, action) {
  switch (action.type) {
    case SHOW_FEATURED:
      const feature = action.feature;
      return state.map((park) => {
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

function shownFeatures(state = [], action) {
  switch (action.type) {
    case SHOW_FEATURED:
      const feature = action.feature;
      state.push(feature)
      return state;
    default:
      return state;
  }
};

const featurePark = combineReducers({
  parks,
  shownFeatures
})

export default featurePark
