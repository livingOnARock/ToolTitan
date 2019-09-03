import React, { useContext } from "react";

import StripButton from "../StripeButton/StripeButton";

import CheckoutItem from "../CheckoutItem/CheckoutItem";
import CartContext from "../../context/cart/cartContext";

import "./Checkout.scss";
const Checkout = () => {
  const cartContext = useContext(CartContext);
  const { cartItems, cartTotal } = cartContext;
  const CartTotal = cartTotal.toFixed(2);
  console.log(CartTotal);
  return (
    <div className="Checkout">
      {cartItems.map(item => (
        <CheckoutItem item={item} />
      ))}
      {cartItems.length > 0 ? (
        <div className="cartTotal">
          <span>TOTAL: </span>
          <span>${CartTotal}</span>
        </div>
      ) : (
        <div className="no-items-message">THERE ARE NO ITEMS IN YOUR CART</div>
      )}
      <div className="StripeButton">
        {cartItems.length > 0 ? <StripButton price={CartTotal} /> : null}
      </div>
    </div>
  );
};

export default Checkout;
