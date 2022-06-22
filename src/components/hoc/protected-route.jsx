import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ accessToken, children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!accessToken || !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
