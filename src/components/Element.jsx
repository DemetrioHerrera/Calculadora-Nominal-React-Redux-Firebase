import React from "react";
import { useDispatch } from "react-redux";
import { borrarRegistro } from "../actions/nomina";

const Element = ({ data }) => {
  const dispatch = useDispatch();

  const { fecha, pago, id } = data;
  const fechaFormateada = [];

  if (fecha.seconds) {
    const date = fecha.toDate();
    const Date = date.toLocaleDateString("es-MX", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    fechaFormateada.push(Date);
  } else {
    const Date = fecha.toLocaleDateString("es-MX", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    fechaFormateada.push(Date);
  }

  const handleDelete = () => {
    dispatch(borrarRegistro(id));
  };

  return (
    <tr className='animate__animated animate__fadeInUp'>
      <td>{fechaFormateada[0]}</td>
      <td>${pago}</td>
      <td>
        <button onClick={handleDelete} className='btn red'>
          <i className='material-icons'>delete_forever</i>
        </button>{" "}
      </td>
    </tr>
  );
};

export default Element;
