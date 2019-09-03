import React from "react";

import SignIn from "../../components/auth/sign-in/sign-in.component";
import SignUp from "../../components/auth/sign-up/sign-up.component";

import "./Auth.scss";

const Auth = () => (
  <div className="auth">
    <SignIn />
    <SignUp />
  </div>
);

export default Auth;
