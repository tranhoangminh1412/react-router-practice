import Protected from "./Protected";
import fakeAuth from "./fakeAuth";
import { Route, Navigate, useNavigate } from "react-router-dom";

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route

//       {...rest}
//       render={(props) =>
//         fakeAuth.isAuthenticated === true ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to={{
//             path: '/login',
//             state: { from: props.location }
//           }}/>
//         )
//       }
//     />
//   );
// }

function PrivateRoute(props) {
  const from = props
  const navigate = useNavigate();
  // navigate("/login", { state:from })
  return <Navigate to="/login" state={from} replace />;
}

export default PrivateRoute;
