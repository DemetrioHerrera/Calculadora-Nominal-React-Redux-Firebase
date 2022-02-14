import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config-firebase";

export const loadData = async uid => {
  const response = await getDocs(collection(db, `nomina: ${uid}`));
  const data = [];

  response.forEach(nomina => {
    const nominaData = nomina.data();
    data.push({
      id: nomina.id,
      ...nominaData,
    });
  });

  return data;
};
