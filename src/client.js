import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { showFeatured, getCurrentLocation } from './actions/actions';
import featurePark from './reducers/reducers';
import App from './components/App';

const initialState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

let store = createStore(featurePark, initialState);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const location = {
      type: 'Point',
      coordinates: [position.coords.latitude, position.coords.longitude]
    }
    console.log(location)
    store.dispatch(getCurrentLocation(location));
    console.log(store.getState())

  }, error => {
      console.log("Error: ", error)
  },{ enableHighAccuracy: true });
}


if (typeof document !== 'undefined') {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
