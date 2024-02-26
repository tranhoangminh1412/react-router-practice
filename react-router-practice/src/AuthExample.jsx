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
import Home from "./Home";

export default function AuthExample() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [isAuthenticated,setAuthenticate] = useState(false)

  return (
    <>
      <Router>
        <div>
          <AuthButton isAuthenticated={isAuthenticated} setAuthenticate={setAuthenticate} />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link
                onClick={() => console.log(
                  "Protected Link onclick: " + isAuthenticated
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
                    isAuthenticated={isAuthenticated}
                    setAuthenticate={setAuthenticate}
                  />
                }
              />
              <Route
                path="/protected"
                element={
                  isAuthenticated ? (
                    <Protected />
                  ) : (
                    <PrivateRoute from={"/protected"} />
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
