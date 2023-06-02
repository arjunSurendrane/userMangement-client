import { Route, Routes } from "react-router-dom";
import AdminOutlet from "./AdminOutlet";

export default function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" />
      </Routes>
      <Routes>
        <Route path="/*" element={<AdminOutlet />}>
          <Route path="/employees" />
          <Route path="/add/employee" />
          <Route path="/add/hr" />
          <Route path="/hr" />
          <Route path="/:empid/employee" />
          <Route path="/:hrid/hr" />
        </Route>
      </Routes>
    </>
  );
}
