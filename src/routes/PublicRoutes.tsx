import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default PublicRoutes;
