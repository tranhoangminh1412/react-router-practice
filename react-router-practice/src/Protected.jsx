import { Outlet, Navigate } from "react-router-dom";

function Protected(props) {
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
  }
}

export default Protected;
