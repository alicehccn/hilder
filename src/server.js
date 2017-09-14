import path from 'path';
import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import db from '../db';
import Park from '../models/Park';

import App from './components/App';
import featurePark from './reducers/reducers';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.use(handleRender);

function handleRender(req, res) {
  const store = createStore(featurePark);

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  Park.find({})
    .sort({name: 'asc'})
    .exec((err, parks) => {
      if (err)
        throw err;
      res.send(renderFullPage(html, parks))
  });
};

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Hilder</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
};


app.listen(4000, () => {
  console.log('React app listening on port 4000!')
});
