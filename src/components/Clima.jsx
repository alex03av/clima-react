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
    console.log(city);
    try {
      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=cf639c2767ee44e4ba715411222011&q=${city}&aqi=no`
      );

      const json = await request.json();
      setClima(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  function ciudad(city) {
    setClima(null);
    cargarCiudad(city);
  }

  return (
    <div className="datos">
      <InputClima cambioCiudad={ciudad} />
      <InfoClima clima={clima} />
    </div>
  );
}

export default Clima;
