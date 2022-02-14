import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config-firebase";
import { types } from "../types/types";

/* 
    {
        id:"",
        fecha:"dd/mm/yyyy"
        pago: $$$.$$
    }
*/

export const crearRegistro = pago => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const datos = {
      fecha: new Date(),
      pago: pago,
    };
    const referencia = await addDoc(collection(db, `nomina: ${uid}`), datos);
    const id = referencia.id;
    const newData = {
      id,
      ...datos,
    };
    dispatch(crear(newData));
  };
};

export const borrarRegistro = id => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await deleteDoc(doc(db, `nomina: ${uid}`, `${id}`));
    dispatch(borrar(id));
  };
};

/*  */

export const leerRegistros = data => {
  return {
    type: types.nominaRead,
    payload: data,
  };
};

export const crear = data => {
  return {
    type: types.nominaAdd,
    payload: data,
  };
};

export const borrar = id => {
  return {
    type: types.nominaDelete,
    payload: id,
  };
};

export const limpiar = () => {
  return {
    type: types.nominaClean,
  };
};
