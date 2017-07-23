import media from './media-reducer.js';
import thumbnail from './thumbnail-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  media,
  thumbnail
});

export default rootReducer;
