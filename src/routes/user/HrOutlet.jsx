import { Navigate, Outlet } from "react-router-dom";

function HrOutlet() {
  const hrJwt = localStorage.getItem("hrJwt");
  if (hrJwt) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
}

export default HrOutlet;
