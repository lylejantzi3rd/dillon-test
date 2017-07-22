import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import * as mediaActions from './actions/media-actions';

const store = configureStore();
store.dispatch(mediaActions.fetchMediaItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
