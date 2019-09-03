import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";

import "./Tool.scss";

import SECTIONS from "../../pages/shop/shop.data";
import CartContext from "../../context/cart/cartContext";

const Tool = ({ match, history }) => {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const { section, type, tool, brand } = match.params;
  const TOOL = SECTIONS[section].items[type].items[brand][tool];
  const { title, price, srcImgs, descriptions } = TOOL;

  const [displayImg, setDisplayImg] = useState(srcImgs[0]);
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = number => {
    const setNum = quantity + number;
    setQuantity(setNum);
  };

  const handleAddToCart = async () => {
    console.log(quantity);
    await addToCart(TOOL, quantity);
  };

  return (
    <div className="Tool">
      <div className="Tool-display">
        <h2>{title}</h2>
        <div className="Tool-images">
          <img src={displayImg} alt="" className="Tool-display-img" />
          <div className="line" />
          <div className="Tool-previewImgs">
            {srcImgs.map((img, idx) => {
              return (
                <img
                  className="Tool-previewImg"
                  src={img}
                  alt={idx}
                  onClick={() => {
                    setDisplayImg(srcImgs[idx]);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="Tool-info">
        <h3>${price}</h3>
        <div className="Tool-cart">
          <div className="Tool-qtyContainer">
            <button
              className="qtyContainerControl"
              onClick={() => {
                changeQuantity(-1);
              }}
            >
              -
            </button>
            <div className="quantity">{quantity}</div>
            <button
              className="qtyContainerControl"
              onClick={() => {
                changeQuantity(1);
              }}
            >
              +
            </button>
          </div>
          <button className="addToCart" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
        <div className="descriptions">
          {descriptions.map(desc => (
            <p className="description">{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Tool);
