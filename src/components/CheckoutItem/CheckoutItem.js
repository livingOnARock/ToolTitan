import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import "./CheckoutItem.scss";
import CartContext from "../../context/cart/cartContext";

const CheckoutItem = ({ item, history, match }) => {
  const cartContext = useContext(CartContext);
  const { removeFromCart, handleQuantity } = cartContext;

  const { name, srcImgs, title, price, quantity } = item;

  function handleChange(event) {
    handleQuantity(item, event.target.value);
  }

  return (
    <div className="CheckoutItem">
      <div className="CheckoutItem-info">
        <img
          src={srcImgs[0]}
          alt={name}
          onClick={() => {
            history.push(`/`);
          }}
        />
        <div className="CheckoutItem-text">
          <span className="CheckoutItem-title">{title}</span>
          <span className="CheckoutItem-price">${price}</span>
          <span className="CheckoutItem-stock">In Stock</span>
          <div className="CheckoutItem-utils">
            <select value={quantity} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <button
              className="CheckoutItem-delete"
              onClick={() => {
                removeFromCart(item);
              }}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CheckoutItem);
