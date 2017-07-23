import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import * as mediaActions from './actions/media-actions';
import {loadState, saveState} from './localStorage';

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
