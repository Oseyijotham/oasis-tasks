import { useAuthHook } from '../../customHook/customHook';
import { Navigate } from 'react-router-dom';



export const RestrictedRouteNav = ({ component: Component, redirectTo = 'all' }) => {
  const { isLoggedIn } = useAuthHook();
 

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

