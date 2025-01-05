import { useEffect, lazy } from 'react';
//import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { SharedSortingLayout } from '../SharedSortingLayout/SharedSortingLayout';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { RestrictedRouteRegister } from '../RestrictedRouteRegister/RestrictedRouteRegister';
import { RestrictedRouteLogin } from '../RestrictedRouteLogin/RestrictedRouteLogin';
import { RestrictedRouteNav } from '../RestrictedRouteNav/RestrictedRouteNav';
import { refreshUser, getUser } from '../../redux/AuthRedux/operations';
import { useDispatch } from 'react-redux';
import { useAuthHook } from '../../customHook/customHook'

const Register = lazy(() => import('../Register/Register'));
const Login = lazy(() => import('../Login/Login'));
const Contacts = lazy(() => import('../Contacts/Contacts'));
const Home = lazy(() => import('../Home/Home'));
const SharedFooter = lazy(() => import('../SharedFooter/SharedFooter'));
const SortedAllTasks = lazy(() => import('../SortedAllTasks/SortedAllTasks'));
const SortedPendingTasks = lazy(() => import('../SortedPendingTasks/SortedPendingTasks'));
const SortedCompletedTasks = lazy(() => import('../SortedCompletedTasks/SortedCompletedTasks'));
const SortedPastDueTasks = lazy(() => import('../SortedPastDueTasks/SortedPastDueTasks'));

export const App = () => {
  const { isRefreshing } = useAuthHook();
  const dispatch = useDispatch();


    useEffect(() => {
      dispatch(refreshUser());
      //dispatch(getUser());
    }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedFooter />}>
        <Route
          index
          element={
            <RestrictedRouteLogin
              redirectTo="sharedLayout/Home"
              component={<Login />}
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRouteRegister redirectTo="/" component={<Register />} />
          }
        />
        <Route path="sharedLayout" element={<SharedLayout />}>
          <Route
            path="Home"
            element={<PrivateRoute redirectTo="/" component={<Home />} />}
          />
          <Route
            path="tasks"
            element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
          />
          <Route path="sorting" element={<SharedSortingLayout />}>
            <Route
              index
              element={
                <RestrictedRouteNav
                  redirectTo="all"
                  component={<SharedSortingLayout />}
                />
              }
            />

            <Route
              path="all"
              element={
                <PrivateRoute redirectTo="/" component={<SortedAllTasks />} />
              }
            />

            <Route
              path="pending"
              element={
                <PrivateRoute redirectTo="/" component={<SortedPendingTasks />} />
              }
            />

            <Route
              path="completed"
              element={
                <PrivateRoute redirectTo="/" component={<SortedCompletedTasks />} />
              }
            />

            <Route
              path="past_due"
              element={
                <PrivateRoute redirectTo="/" component={<SortedPastDueTasks />} />
              }
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};