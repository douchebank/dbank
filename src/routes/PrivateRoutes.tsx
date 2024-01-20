import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Sip from "../pages/Sip";
import Account from "../pages/Account";
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Dashboard />} path="/dashboard" />
      <Route element={<Sip />} path="/sip" />
      <Route element={<Account />} path="/account" />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default PrivateRoutes;
