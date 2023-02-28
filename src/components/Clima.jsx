import { useState, useEffect } from "react";
import { InputClima } from "./InputClima";
import InfoClima from "./InfoCLima";
function Clima() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    cargarCiudad();
  }, []);

  useEffect(() => {
    document.title = `Clima  ${clima?.location.name ?? ""}`;
  }, [Clima]);

  async function cargarCiudad(city = "venezuela") {
    try {
      const request = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=350babb427b1498d803221234230201&q=${city}&aqi=no`
      );

      const json = await request.json();
      setClima(json);
    } catch (error) {
      console.log(error);
    }
  }

  /*async function climaFuturos(cargarCiudad,fecha) {
   
    try {
      const request = await fetch(
        `https://api.weatherapi.com/v1/future.json?key=350babb427b1498d803221234230201&q=${cargarCiudad}&dt=${fecha}
       `
      );

      const json = await request.json();
      setClimafuturo([...climafuturo,json]);
    } catch (error) {
      console.log(error);
    }
  }*/

  function ciudad(city) {
    setClima(null);
    cargarCiudad(city);
  }
  console.log(clima);
  //console.log(clima.location.localtime)
  return (
    <div className="datos">
      <InfoClima clima={clima} />
      <InputClima cambioCiudad={ciudad} />
    </div>
  );
}

export default Clima;
