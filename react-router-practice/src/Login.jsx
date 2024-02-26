import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import fakeAuth from "./fakeAuth";

function Login(props) {
  const { redirectToReferrer, setRedirectToReferrer, setAuthenticate } = props;
  const location = useLocation();
  const { from } = location.state || { from: "/" };
  const navigate = useNavigate();
  console.log(from);

  const login = () => {
    console.log("from: " + props.state);
    setRedirectToReferrer(true);
    setAuthenticate(true);
    navigate(from);
  };

  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default Login;
