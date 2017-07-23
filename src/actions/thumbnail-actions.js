import * as types from './action-types';

export const setThumbnailWidth = (width) => {
  return {
    type: types.SET_THUMBNAIL_WIDTH,
    width
  }
}
