import { Outlet } from "react-router-dom";

function Protected() {
  return (
    <div>
      <h3>You have reached the Protected Page</h3>
      <Outlet />
    </div>
  );
}

export default Protected;
