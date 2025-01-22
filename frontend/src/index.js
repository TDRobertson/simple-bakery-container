import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming you have an `App.js` component in the same directory
import './index.css'; // Optional: CSS file for global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This matches the `div id="root"` in `index.html`
);
