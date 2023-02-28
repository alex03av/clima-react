import React from "react";
import { TiWeatherPartlySunny, TiWeatherWindyCloudy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import {
  TbTemperatureCelsius,
  TbTemperatureFahrenheit,
  TbTemperature,
} from "react-icons/tb";

import { GiWizardStaff } from "react-icons/gi";
function InfoCLima({ clima }) {
  return (
    <>
      <div className="datos__clima">
        <h1>
          <TiWeatherPartlySunny />
          Pronostico Climatico
        </h1>

        <img src={`http:${clima?.current.condition.icon}`} alt="clima" />
        <p>
          <GiWizardStaff />
          Pronostico: {clima?.current.condition.text}
        </p>

        <p>
          <TbTemperature />
          Temperatura: {clima?.current.temp_c} <TbTemperatureCelsius />
        </p>

        <p>
          <TbTemperature />
          Temperatura: {clima?.current.temp_f} <TbTemperatureFahrenheit />
          <p> </p>
          <TiWeatherWindyCloudy />
          Sensacion: {clima?.current.feelslike_c}
        </p>

        <p>
          <WiHumidity />
          humedad: {clima?.current.humidity}
        </p>
      </div>

      <div className="datos__mapa">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31407.298707085163!2d${clima?.location.lon}!3d${clima?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1668966768983!5m2!1ses!2sve`}
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default InfoCLima;
