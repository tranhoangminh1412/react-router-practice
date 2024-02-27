import { useNavigate, useLocation } from "react-router-dom";

const AuthButton = (props) => {
  const {isAuthenticated, setAuthenticate} = props
  const navigate = useNavigate();

  return isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          setAuthenticate(false);
          console.log(
            "authButton authenticate check: " + isAuthenticated
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
