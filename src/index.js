import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  //strictmode is a helper component for verifying depreciated methids, 
  //preventing side effects, and enables checks to give warning

  //BrowserRouter is the router implementation
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

