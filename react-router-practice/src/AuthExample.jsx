import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Login from "./Login";
import Public from "./Public";
import Protected from "./Protected";
import { useState } from "react";
import AuthButton from "./AuthButton";
import PrivateRoute from "./PrivateRoute";
import fakeAuth from "./fakeAuth";
import { Navigate } from "react-router-dom";
import Home from "./Home";

export default function AuthExample() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  return (
    <>
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link
                onClick={console.log(
                  "Protected Link onclick: " + fakeAuth.isAuthenticated
                )}
                to="/protected"
              >
                Protected Page
              </Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/public" element={<Public />} />
              <Route
                path="/login"
                element={
                  <Login
                    redirectToReferrer={redirectToReferrer}
                    setRedirectToReferrer={setRedirectToReferrer}
                  />
                }
              />
              <Route
                path="/protected"
                element={
                  fakeAuth.isAuthenticated ? (
                    <Protected />
                  ) : (
                    <Navigate
                      to="/login"
                      state={{ from: location.pathname }}
                      replace={true}
                    />
                  )
                }
              />
            </Route>
          </Routes>
          <Outlet />
        </div>
      </Router>
    </>
  );
}
