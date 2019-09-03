import React, { useReducer } from "react";
import CartContext from "./cartContext";
import cartReducer from "./cartReducer";
import CartActionTypes from "./cartTypes";

const CartState = props => {
  const initialState = {
    hidden: true,
    cartItems: [],
    cartTotal: 0
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const toggleCartHidden = () => {
    dispatch({
      type: CartActionTypes.TOGGLE_CART_HIDDEN
    });
  };

  const addToCart = async (item, quantity) => {
    const idx = state.cartItems.findIndex(itm => itm.name === item.name);
    if (idx === -1) {
      item.quantity = quantity;
    } else {
      state.cartItem[idx].quantity = state.cartItem[idx].quantity + quantity;
      item = state.cartItem[idx];
    }
    dispatch({
      type: CartActionTypes.ADD_TO_CART,
      payload: item
    });
  };
  //localStorage.setItem("myCart", JSON.stringify(state.cartItems));

  const removeFromCart = async item => {
    dispatch({
      type: CartActionTypes.REMOVE_ITEM,
      payload: item.name
    });
  };

  const handleQuantity = (item, num) => {
    console.log(num);
    const CartItems = [];
    state.cartItems.forEach(cartItem => {
      if (cartItem.name !== item.name) {
        CartItems.push(cartItem);
      } else {
        cartItem.quantity = num;
        CartItems.push(cartItem);
        console.log(cartItem);
      }
    });

    dispatch({
      type: CartActionTypes.HANDLE_QUANTITY,
      payload: CartItems
    });
  };

  return (
    <CartContext.Provider
      value={{
        hidden: state.hidden,
        cartItems: state.cartItems,
        cartTotal: state.cartItems.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.quantity * currentValue.price;
        }, 0),
        addToCart,
        handleQuantity,
        removeFromCart,
        toggleCartHidden
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
