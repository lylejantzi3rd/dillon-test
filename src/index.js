import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import * as mediaActions from './actions/media-actions';
import {loadState, saveState} from './localStorage';

// Check for browser support of service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
    .then(registration => {
      // Successful registration
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(err => {
      // Failed registration, service worker won’t be installed
      console.log('Service worker registration failed, error:', err);
    });
}

var initialState = {
  "thumbnail": {
    "width":270, 
    "defaultWidth": 270, 
    "defaultHeight": 385
  }
}

// If localStorage hasn't been set yet, use the inital state
const persistedState = loadState() || initialState;
const store = configureStore(persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

store.dispatch(mediaActions.fetchMediaItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
