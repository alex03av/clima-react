import { useState } from "react";

export function InputClima({ cambioCiudad }) {
  const [city, setCity] = useState("");

  const CambiarCity = (e) => {
    const valor = e.target.value;

    if (valor !== "") {
      setCity(valor);
    }
  };
  const enviarForm = (e) => {
    e.preventDefault();
    cambioCiudad(city);
  };
  return (
    <form className="form" onSubmit={enviarForm}>
        <h1>Pronostico Climatico</h1>
        <div className="cont">
      <input type="text" placeholder="Ingrese La Ciudad A Buscar" onChange={CambiarCity} /></div>
     
    </form>
  );
}
