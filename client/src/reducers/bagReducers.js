import {
  // CART_ADD_ITEM,
  // CART_REMOVE_ITEM,
  // CART_SAVE_SHIPPING_ADDRESS,
  // CART_SAVE_PAYMENT_METHOD,
  BAG_ADD_ITEM,
  BAG_REMOVE_ITEM,
  BAG_SAVE_SHIPPING_ADDRESS,
  BAG_SAVE_PAYMENT_METHOD,
  BAG_SAVE_SHIPPING_LOCATION,
} from '../constants/bagConstant'

export const bagReducer = (
  state = { bagItems: [], shippingAddress: {} },
  action
) => {
  // console.log("bagItem", bagItems)
  switch (action.type) {
    case BAG_ADD_ITEM:
      const item = action.payload
      const existItem = state.bagItems.find((x) => x.book === item.book)

      if (existItem) {
        return {
          ...state,
          bagItems: state.bagItems.map((x) =>
            x.book === existItem.book ? item : x
          ),
        }
      } else {
        return {
          ...state,
          bagItems: [...state.bagItems, item],
        }
      }
    case BAG_REMOVE_ITEM:
      // console.log('da', action.payload)

      return {
        ...state,
        bagItems: state.bagItems.filter((x) => x.book !== action.payload),
      }
    // console.log('da', action.payload)

    case BAG_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }
    case BAG_SAVE_SHIPPING_LOCATION:
      return {
        ...state,
        shippingLocation: action.payload,
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
