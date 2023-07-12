import React from "react";
import '../styles/Testimonio.css';

export function Testimonio(props) {
  return (
    <div className="contenedor-testimonios">
      <img 
        className="imagen-testimonio"
        src={require(`../images/testimonio-${props.imagen}.png`)}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="name-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="posicion-testimonio">
          {props.cargo} de software en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );     
}
