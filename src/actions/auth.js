import { types } from "../types/types";
import { googleAuthProvider } from "../firebase/config-firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const googleLogin = () => {
  return dispatch => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(
          `Ha ocurrido el error: ${errorMessage} con el código: ${errorCode}. \nLa credencial de Autenticación: ${credential}n En el emal ${email} `
        );
      });
  };
};

export const emailAndPassworLogin = (email, password) => {
  return dispatch => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(
          `Ha ocurrido el error: ${errorMessage} con el código: ${errorCode}.`
        );
      });
  };
};

export const register = (email, username, password) => {
  return dispatch => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: username,
        });
        dispatch(login(user.uid, user.displayName));
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(
          `Ha ocurrido el error: ${errorMessage} con el código: ${errorCode}.`
        );
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logout = () => {
  return async dispatch => {
    const auth = getAuth();
    await signOut(auth).catch(error => console.error(error));

    dispatch({
      type: types.logout,
    });
  };
};
