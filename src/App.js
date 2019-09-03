import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/Auth/Auth";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Checkout from "./components/Checkout/Checkout";
import ByBrands from "./components/ByBrands/ByBrands";

import TypeOverview from "./components/TypeOverview/TypeOverview";
import Tool from "./components/Tool/Tool";

import CartState from "./context/cart/CartState";
import firebase, { FirebaseContext } from "./firebase";

import useAuth from "./firebase/useAuth"; //

function App() {
  const user = useAuth(); //
  console.log(user);
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <CartState>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/shop" component={ShopPage} />
              <Route exact path="/shop/:section" render={() => <Section />} />
              <Route
                exact
                path="/shop/:section/:type"
                component={TypeOverview}
              />
              <Route
                exact
                path="/shop/:section/:type/:brand/:tool"
                render={() => <Tool />}
              />
              <Route exact path="/signin" component={SignInAndSignUpPage} />
              <Route exact path="/brand/:brandId" component={ByBrands} />
            </Switch>
          </div>
        </BrowserRouter>
      </CartState>
    </FirebaseContext.Provider>
  );
}

export default App;
