import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import * as mediaActions from './actions/media-actions';

const store = configureStore( {
  "thumbnail": {
    "width":270, 
    "defaultWidth": 270, 
    "defaultHeight": 385
  }
});
store.dispatch(mediaActions.fetchMediaItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
