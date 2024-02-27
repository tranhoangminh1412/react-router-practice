import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { redirectToReferrer, setRedirectToReferrer, setAuthenticate } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const {state} = location
  const from = state ? state.from : '/';
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
