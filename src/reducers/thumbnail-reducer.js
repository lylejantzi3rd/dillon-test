import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.SET_THUMBNAIL_WIDTH:
      return {...state, "width": action.width};
    default:
      return state;
  }
};
