import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_MEDIA_ITEMS_SUCCESS:
      return action.media;
    default:
      return state;
  }
};
