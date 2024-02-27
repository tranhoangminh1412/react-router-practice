import { Outlet, useNavigate, redirect, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Protected(props) {
  let navigate = useNavigate();
  const { isAuthenticated } = props;

  if (isAuthenticated) {
    return (
      <div>
        <h3>You have reached the Protected Page</h3>
        <Outlet />
      </div>
    );
  }
  else{
    return(
      <Navigate to={'/login'} state={{from: '/protected'}} replace />
    )
    // redirect("/login", {state: {from: "/protected"}})
    navigate('/login', { state: { from: '/protected' } });
  }
}

export default Protected;
