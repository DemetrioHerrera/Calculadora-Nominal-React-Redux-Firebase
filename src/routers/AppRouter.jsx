import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import LoadingScreen from "../pages/LoadingScreen";

import { login } from "../actions/auth";
import { loadData } from "../helpers/loadData";
import { leerRegistros } from "../actions/nomina";

const AuthRouter = lazy(() => import("./AuthRouter"));
const PrivateRouter = lazy(() => import("./PrivateRouter"));
const PublicRouter = lazy(() => import("./PublicRouter"));

const AppScreen = lazy(() => import("../pages/AppScreen"));
//const LoadingScreen = lazy(() => import("../pages/LoadingScreen"));

const AppRouter = () => {
  const dispatch = useDispatch();

  const [isLog, setIsLog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        await dispatch(login(user.uid, user.displayName));
        const nominaData = await loadData(user.uid);
        setIsLog(true);

        dispatch(leerRegistros(nominaData));
      } else {
        // User is signed out
        setIsLog(false);
      }
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        {isLoading ? (
          <Routes>
            <Route path='*' element={<LoadingScreen />} />
          </Routes>
        ) : (
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
        )}
      </Suspense>
    </Router>
  );
};

export default AppRouter;
