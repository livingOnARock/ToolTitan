import React from "react";

const CartItem = item => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="CartItem">
      <img src={imageUrl} alt="item" />
      <div className="ItemDetails">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${parseInt(price)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
