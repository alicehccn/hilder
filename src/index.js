import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import { showFeatured } from './actions/actions';

import featurePark from './reducers/reducers';
import App from './components/App';

let store = createStore(featurePark, window.STATE_FROM_SERVER);
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
