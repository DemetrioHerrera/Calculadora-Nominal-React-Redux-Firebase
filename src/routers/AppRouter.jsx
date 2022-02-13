import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import AppScreen from "../pages/AppScreen";
import { login } from "../actions/auth";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [isLog, setIsLog] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        await dispatch(login(user.uid, user.displayName));
        await setIsLog(true);
      } else {
        // User is signed out
        setIsLog(false);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          path='/auth/*'
          element={
            <PublicRouter isLog={isLog}>
              <AuthRouter />
            </PublicRouter>
          }
        />

        <Route
          path='/app'
          element={
            <PrivateRouter isLog={isLog}>
              <AppScreen />
            </PrivateRouter>
          }
        />
        <Route path='*' element={<Navigate to='/auth/login' />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
