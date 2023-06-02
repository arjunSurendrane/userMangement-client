import { Route, Routes } from "react-router-dom";
import HrOutlet from "./HrOutlet";
import Login from "../../pages/user/Login";
import UserProfile from "../../pages/user/profile";
import Employees from "../../pages/user/Employees";

export default function UserRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/:empid/employee" element={<UserProfile />} />
        <Route path="*" element={<HrOutlet />}>
          <Route path="employees" element={<Employees />} />
          <Route path="profile" />
        </Route>
      </Routes>
    </>
  );
}
