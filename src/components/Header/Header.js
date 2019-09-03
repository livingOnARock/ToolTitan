import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { auth } from "../../firebase-old/firebase.utils";

import powerDrill from "../../assets/power-drill-logo.png";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";

import "./Header.scss";
import CartDropdown from "../Cart-dropdown/Cart-dropdown";

import CartContext from "../../context/cart/cartContext";
import { FirebaseContext } from "../../firebase";

const Header = ({ currentUser, history }) => {
  const { user, firebase } = React.useContext(FirebaseContext);

  const cartContext = useContext(CartContext);
  const { hidden, cartItems } = cartContext;
  return (
    <div className="header">
      <div className="topHeader">
        <img
          src={powerDrill}
          as={Link}
          onClick={() => {
            history.push("/");
          }}
        />
        <ShoppingCartIcon />
        {/* {hidden ? null : <CartDropdown />} */}
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {user ? (
          <div className="option" onClick={() => firebase.logout()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};
export default withRouter(Header);
