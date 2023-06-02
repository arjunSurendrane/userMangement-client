import { Route, Routes } from "react-router-dom";
import AdminOutlet from "./AdminOutlet";
import ManageUsers from "../../pages/admin/ManageUsers";
import AdminLogin from "../../pages/admin/Login";
import Header from "../../components/Header";

export default function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
      </Routes>
      <div className="mt-5">
        <Header
          menuItem={[{ name: "Employees", link: "/d/admin/d/employees" }]}
        />
      </div>

      <Routes>
        <Route path="/d/*" element={<AdminOutlet />}>
          <Route path="employees" element={<ManageUsers />} />
          <Route path="add/employee" />
          <Route path="add/hr" />
          <Route path="hr" />
          <Route path=":empid/employee" />
          <Route path=":hrid/hr" />
        </Route>
      </Routes>
    </>
  );
}
