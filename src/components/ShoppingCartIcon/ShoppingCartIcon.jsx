import React, { useContext } from "react";
import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";
import { withRouter } from "react-router-dom";

import CartContext from "../../context/cart/cartContext";

import "./ShoppingCartIcon.scss";
const ShoppingCartIcon = ({ history }) => {
  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;
  return (
    <div
      className="ShoppingCartIcon"
      onClick={() => {
        //toggleCartHidden();
        history.push("/checkout");
      }}
    >
      <ShoppingIconSVG className="ShoppingCartIcon-icon" />
      <p className="cart-count">{cartItems.length}</p>
    </div>
  );
};

export default withRouter(ShoppingCartIcon);
