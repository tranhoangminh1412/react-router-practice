import { useState } from "react";
import { Navigate } from "react-router-dom";
import fakeAuth from "./fakeAuth";

function Login(props) {
  const {redirectToReferrer,setRedirectToReferrer} = props
  const { from } = props.state || { from: { pathname: '/' } }


  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    console.log("REDIRECTTOREFERRER")
    return <Navigate to={from} />;
  }

  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default Login;
