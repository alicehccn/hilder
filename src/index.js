import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';

if (typeof document !== 'undefined') {
  const root = document.getElementById('root');
  ReactDOM.render(<HelloWorld />, root);
}
