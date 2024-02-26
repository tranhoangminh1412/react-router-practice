import Protected from "./Protected";
import fakeAuth from "./fakeAuth";
import { Route, Navigate } from "react-router-dom";

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

function PrivateRoute({ element: Element, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        fakeAuth.isAuthenticated === true ? (
          <Protected />
        ) : (
          <Navigate to="/login" state={{ from: rest.location }} replace />
        )
      }
    />
  );
}

export default PrivateRoute;
