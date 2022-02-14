import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina";

const FormAdd = () => {
  const [viewForm, setViewForm] = useState(false);
  const [cantidadPago, setCantidadPago] = useState({
    pago: 0,
    horas: 0,
  });

  const dispatch = useDispatch();
  const { pago, horas } = cantidadPago;

  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleChange = e => {
    setCantidadPago({
      ...cantidadPago,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const handleSave = () => {
    const pagoTotal = pago * horas;
    dispatch(crearRegistro(pagoTotal));
  };
  return (
    <div>
      <button onClick={handleAdd} className='btn green'>
        {viewForm ? "Cerrar" : "Agregar"}
      </button>
      {viewForm && (
        <>
          <input
            type='number'
            placeholder='Ingresa cantidad de pago por hora'
            value={pago}
            onChange={handleChange}
            name='pago'
          />
          <input
            type='number'
            placeholder='Ingresa cantidad de horas'
            value={horas}
            onChange={handleChange}
            name='horas'
          />
          <button className='btn purple' onClick={handleSave}>
            Calcular y guardar
          </button>
        </>
      )}
    </div>
  );
};

export default FormAdd;
