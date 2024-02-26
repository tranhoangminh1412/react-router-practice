import { Outlet } from "react-router-dom";

function Public() {
  return (
    <div>
      <h3>You have reached the Public Page</h3>
      <Outlet />
    </div>
  );
}

export default Public;
