import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute(props) {
  const from = props;
  const navigate = useNavigate();
  // navigate("/login", { state:from })
  return <Navigate to="/login" state={from} replace />;
}

export default PrivateRoute;
