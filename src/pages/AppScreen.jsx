import React, { lazy } from "react";
import { useSelector } from "react-redux";

const Element = lazy(() => import("../components/Element"));
const FormAdd = lazy(() => import("../components/FormAdd"));
const Navbar = lazy(() => import("../components/Navbar"));

const AppScreen = () => {
  const name = useSelector(state => state.auth.displayName);
  const data = useSelector(state => state.nomina.Data);

  return (
    <>
      <Navbar />
      <div className='container animate__animated animate__backInUp'>
        <h1 className='center'>Hola {name}</h1>
        <hr />
        <FormAdd />
        <table className='responsive-table highlight'>
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
