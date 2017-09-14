import path from 'path';
import express from 'express';
import React from 'react';
import ReactServer from 'react-dom/server';
import fs from 'fs';

import HelloWorld from './components/HelloWorld';


const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html')).toString();
  const markup = ReactServer.renderToString(<HelloWorld />);
  res.send(html.replace('$react', markup));
});

app.listen(4000, () => {
  console.log('React app listening on port 4000!')
});
