import { useNavigate, useLocation } from "react-router-dom";
import fakeAuth from "./fakeAuth";

const AuthButton = () => {
  const navigate = useNavigate();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.isAuthenticated = false;
          console.log(
            "authButton authenticate check: " + fakeAuth.isAuthenticated
          );
          console.log("what the fuck");
          navigate("/");
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default AuthButton;
