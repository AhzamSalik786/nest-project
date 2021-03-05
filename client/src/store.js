import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  bookListReducer,
  bookDetailsReducer,
} from './reducers/bookReducers'
import { cartReducer } from './reducers/bagReducers'
import {
  userLoginReducer,
  gmailUserLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  gmailUserLogin : gmailUserLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
})

const cartItemFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userIndoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userIndoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
