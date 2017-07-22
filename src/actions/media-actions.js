import * as types from './action-types';
import axios from 'axios';

export const fetchMediaItemsSuccess = (media) => {
  return {
    type: types.FETCH_MEDIA_ITEMS_SUCCESS,
    media
  }
}

export const fetchMediaItems = () => {
  return (dispatch) => {
    return axios({
        method: 'get',
        url: 'https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7',
        headers: {'ws-api': '2.1'}
      }).then(response => {
        dispatch(fetchMediaItemsSuccess(response.data));
      }).catch(error => {
        throw error;
      });
  }
}
