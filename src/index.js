import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  //strictmode is a helper component for verifying depreciated methods, 
  //preventing side effects, and enables checks to give warning

  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

