import { Navigate } from "react-router-dom";

const OfficerProtectedRoute = ({ element }) => {
  const isOfficerAuthenticated = !!localStorage.getItem("officerToken");

  return isOfficerAuthenticated ? element : <Navigate to="/officersLogin" />;
};

export default OfficerProtectedRoute;
