import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import "./ToolPreview.scss";
import CartContext from "../../context/cart/cartContext";

const ToolPreview = ({ tool, match, history }) => {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  return (
    <div className="ToolPreview">
      <img
        src={tool.srcImgs[0]}
        alt=""
        onClick={() => {
          history.push(`${match.url}/${tool.brand}/${tool.name}`);
        }}
      />
      <h4
        onClick={() => {
          history.push(`${match.url}/${tool.brand}/${tool.name}`);
        }}
      >
        {tool.title}
      </h4>
      <h2>{tool.price}</h2>
      <button
        onClick={() => {
          addToCart(tool, 1);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default withRouter(ToolPreview);
