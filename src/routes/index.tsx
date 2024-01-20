
import { useAuth } from "../hooks/system-hooks/useAuth";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function AppRoutes() {


  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />;
}

export default AppRoutes;
