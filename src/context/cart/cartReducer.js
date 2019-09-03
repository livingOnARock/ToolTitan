import CartActionTypes from "./cartTypes";

export default (state, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    //
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => {
          return item.name !== action.payload;
        })
      };

    case CartActionTypes.HANDLE_QUANTITY:
      return {
        ...state,
        cartItems: action.payload
      };
    case CartActionTypes.HANDLE_CART_TOTAL:
      return {
        ...state,
        cartTotal: action.payload
      };
    default:
      return state;
  }
};
