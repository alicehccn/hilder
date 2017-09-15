import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import featurePark from './reducers/reducers';
import App from './components/App';

const initialState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(featurePark, initialState);

if (typeof document !== 'undefined') {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
