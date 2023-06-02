import { Route, Routes } from "react-router-dom";
import HrOutlet from "./HrOutlet";
import Login from "../../pages/user/Login";
import UserProfile from "../../pages/user/Profile";
import Employees from "../../pages/user/Employees";
import Header from "../../components/Header";

export default function UserRoutes() {
  const role = localStorage.getItem("role");
  const menuitem =
    role == "Hr"
      ? [{ name: "Home", link: "/employees" }]
      : role == "admin"
      ? [{ name: "Home", link: "/admin/d/employees" }]
      : [{ name: "Profile", link: "#" }];

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <div className="mt-7">
        <Header menuItem={menuitem} />
      </div>

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
