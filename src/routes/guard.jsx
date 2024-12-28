import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Guard = ({ children }) => {
  const token = localStorage.getItem('token'); 
  const isAuthenticated = !!token; 

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Guard;
