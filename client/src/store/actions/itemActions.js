import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios';


export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items')
  .then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  )
  .catch((err) => {
    console.log(err);
  });
};

export const addItem = item => dispatch => {
  axios.post('/api/items', item)
  .then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  )
  .catch((err) => {
    console.log(err);
  });
};

/*
export const updateItem = id => dispatch => {
  axios.put(`/api/items/${id}`)
    .then(res => 
      dispatch({
        type: UPDATE_ITEM,
        payload: res.data
      }))
    .catch((err) => {
      console.log(err);
    });
};
*/
/*
export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  }
};
*/
export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`)
  .then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  )
  .catch((err) => {
    console.log(err);
  });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};