import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina";

const FormAdd = () => {
  const [viewForm, setViewForm] = useState(false);
  const [cantidadPago, setCantidadPago] = useState({
    pago: "",
    horas: "",
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
    if (typeof pago != "number" || isNaN(pago)) return;
    if (typeof horas != "number" || isNaN(horas)) return;

    const pagoTotal = pago * horas;
    dispatch(crearRegistro(pagoTotal));
    setCantidadPago({
      pago: "",
      horas: "",
    });
  };

  return (
    <div>
      <button onClick={handleAdd} className='btn green'>
        {viewForm ? "Cerrar" : "Agregar"}
      </button>
      {viewForm && (
        <div className='animate__animated animate__fade'>
          <div className='input-field col s12 '>
            <i className='material-icons prefix'>attach_money</i>
            <input
              type='number'
              value={pago}
              onChange={handleChange}
              name='pago'
              id='pago'
            />
            <label htmlFor='pago'>Pago por hora: </label>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>av_timer</i>
            <input
              type='number'
              value={horas}
              onChange={handleChange}
              name='horas'
              id='horas'
            />
            <label htmlFor='horas'>Horas: </label>
          </div>
          <button className='btn purple' onClick={handleSave}>
            Calcular y guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default FormAdd;
