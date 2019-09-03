import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem.jsx";
import { withRouter } from "react-router-dom";
import CartContext from "../../context/cart/cartContext";

const CartDropdown = ({ history }) => {
  const cartContext = useContext(CartContext);
  const { cartItems, toggleCartHidden } = cartContext;

  return (
    <div className="Cart-dropdown" onClick={() => toggleCartHidden}>
      {cartItems.map(cartItem => {
        console.log(cartItem);
        return <CartItem item={cartItem} />;
      })}
      <button
        className="checkout"
        onClick={() => {
          history.push("/checkout");
        }}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default withRouter(CartDropdown);
