import CartActionTypes from './cart.type';
import { addItemToCart, RemoveItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

      case CartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: RemoveItemFromCart(state.cartItems, action.payload)
        }

    case CartActionTypes.CLEAR_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id) 
      };
    default:
      return state;
  }
};

export default cartReducer;