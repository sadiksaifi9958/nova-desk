import { useApp } from "@/context/AppContext";
import { Outlet, Navigate } from "react-router-dom";
function ProtectedRoute() {
  const { state } = useApp();
  if (state.isAuthenticated === false) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}

export default ProtectedRoute;
