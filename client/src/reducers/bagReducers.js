import {
  // CART_ADD_ITEM,
  // CART_REMOVE_ITEM,
  // CART_SAVE_SHIPPING_ADDRESS,
  // CART_SAVE_PAYMENT_METHOD,
  BAG_ADD_ITEM,
  BAG_REMOVE_ITEM,
  BAG_SAVE_SHIPPING_ADDRESS,
  BAG_SAVE_PAYMENT_METHOD,
} from '../constants/bagConstant'

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case BAG_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case BAG_REMOVE_ITEM:
      // console.log('da', action.payload)

      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    // console.log('da', action.payload)

    case BAG_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }

    case BAG_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }
    // console.log('da', action.payload)

    default:
      return state
  }
}
