import axios from 'axios'
import {
  // CART_ADD_ITEM,
  // CART_REMOVE_ITEM,
  // CART_SAVE_SHIPPING_ADDRESS,
  // CART_SAVE_PAYMENT_METHOD,
  BAG_ADD_ITEM,
  BAG_REMOVE_ITEM,
  BAG_SAVE_SHIPPING_ADDRESS,
  BAG_SAVE_SHIPPING_LOCATION,
  BAG_SAVE_PAYMENT_METHOD,
} from '../constants/bagConstant'

export const addToBag = (id, qty) => async (dispatch, getState) => {
  console.log("addTo", id, qty )
  const { data } = await axios.get(`http://localhost:5000/books/${id}`)
  // http://localhost:5000/books/

  dispatch({
    type: BAG_ADD_ITEM,
    payload: {
      book: data.id,
      name: data.bookName,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })
  localStorage.setItem('bagItems', JSON.stringify(getState().bag.bagItems))
  // console.log(
  //   'bbbbbbbbb',
  //   localStorage.setItem('bagItems', JSON.stringify(getState().bag.bagItems))
  // )
}

export const removeFromBag = (id) => (dispatch, getState) => {
  dispatch({
    type: BAG_REMOVE_ITEM,
    payload: id,
  })
  localStorage.setItem('bagItems', JSON.stringify(getState().bag.bagItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: BAG_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })
  localStorage.setItem('shippingAddress', JSON.stringify(data))
  console.log("address" , data)
}
export const saveShippingLocation = (data) => (dispatch) => {
  dispatch({
    type: BAG_SAVE_SHIPPING_LOCATION,
    payload: data,
  })
  localStorage.setItem('shippingLocation', JSON.stringify(data))
  console.log("Location" , data)
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: BAG_SAVE_PAYMENT_METHOD,
    payload: data,
  })
  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
