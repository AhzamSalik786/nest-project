import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  bookListReducer,
  bookDetailsReducer,
} from './reducers/bookReducers'
import { bagReducer } from './reducers/bagReducers'
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
// console.log( userLogin)

const reducer = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  bag: bagReducer,
  userLogin: userLoginReducer,
  gmailUserLogin : gmailUserLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
})

const bagItemFromStorage = localStorage.getItem('bagItems')
  ? JSON.parse(localStorage.getItem('bagItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
  const userInfoFromGmailStorage = localStorage.getItem('userInfoGmail')
  ? JSON.parse(localStorage.getItem('userInfoGmail'))
  : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}
  const shippingLocationFromStorage = localStorage.getItem('shippingLocation')
  ? JSON.parse(localStorage.getItem('shippingLocation'))
  : {}
  const paymentMethodFromStroage= localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}
console.log("l, l ,address", shippingAddressFromStorage)
console.log("l, l ,Location", shippingLocationFromStorage)
const initialState = {
  bag: {
    bagItems: bagItemFromStorage,
    shippingAddress: shippingAddressFromStorage,
    shippingLocation: shippingLocationFromStorage,
    paymentMethod: paymentMethodFromStroage,
  },
  userLogin: { userInfo: userInfoFromStorage,
               userInfoGmail : userInfoFromGmailStorage
   },
  
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
