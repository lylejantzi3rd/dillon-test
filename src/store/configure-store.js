import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';

// enable redux devtools... can this be done with Webpack instead?
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default (initialState) => {
  return createStore(
    rootReducer, 
    initialState, 
    enhancers
  );
};
