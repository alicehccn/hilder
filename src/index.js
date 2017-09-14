import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import { showFeatured } from './actions/actions';

import featurePark from './reducers/reducers';
import App from './components/App';

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

let store = createStore(featurePark, preloadedState);
console.log(store.getState())
store.dispatch(showFeatured('sky'))
console.log(store.getState())

if (typeof document !== 'undefined') {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
