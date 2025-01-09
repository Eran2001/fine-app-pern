import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminProtectedRoute = ({ element }) => {
  const isAdminAuthenticated = !!localStorage.getItem('adminToken'); // Check admin token

  return isAdminAuthenticated ? element : <Navigate to="/adminLogin" />;

  
};

AdminProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default AdminProtectedRoute;
