import axios from 'axios';
import {
  // PRODUCT_LIST_REQUEST,
  // PRODUCT_LIST_SUCCESS,
  // PRODUCT_LIST_FAIL,
  // PRODUCT_DETAILS_REQUEST,
  // PRODUCT_DETAILS_SUCCESS,
  // PRODUCT_DETAILS_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_DETAILS_FAIL,
} from '../constants/bookConstants';

export const ListBooks = () => async (dispatch) => {
  try {
    dispatch({ type: BOOK_LIST_REQUEST });

    const { data } = await axios.get('http://localhost:5000/books');

    dispatch({
      type: BOOK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ListBookDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOOK_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:5000/books/${id}`);

    dispatch({
      type: BOOK_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
