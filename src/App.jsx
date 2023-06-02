import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoutes from "./routes/admin/AdminRoutes";
import UserRoutes from "./routes/user/UserRoutes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/d/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
