import React from "react";

import { useSelector } from "react-redux";
import Element from "../components/Element";

import FormAdd from "../components/FormAdd";
import Navbar from "../components/Navbar";

const AppScreen = () => {
  const name = useSelector(state => state.auth.displayName);
  const data = useSelector(state => state.nomina.Data);

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='center'>Hola {name}</h1>
        <hr />
        <FormAdd />
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {data.map(element => {
              return <Element key={element.id} data={element} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
