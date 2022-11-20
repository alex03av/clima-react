import React from "react";

function InfoCLima({ clima }) {
  return (
    <>
      <div className="datos__clima">
        <div>
          <h3>Clima De Hoy</h3>
          <img src={`http:${clima?.current.condition.icon}`} alt="clima" />
          <p>
            {" "}
            Pronostico: <b>{clima?.current.condition.text}</b>
          </p>
        </div>
        <p>
          🌡️Temperatura: <b>{clima?.current.temp_c} ℃</b>
        </p>

        <p>
          {" "}
          🌡️Temperatura: <b>{clima?.current.temp_f} ℉</b>
        </p>
        <p>
          {" "}
          ☀️Sensacion: <b>{clima?.current.feelslike_c}</b>
        </p>

        <p>
          💧humedad: <b>{clima?.current.humidity}</b>
        </p>
      </div>

      <div className="datos__localizacion">
        <p>
          🌏︎Pais: <b>{clima?.location.country}</b>
        </p>
        <p>
          🌇Estado: <b>{clima?.location.region}</b>
        </p>
        <p>
          🏙Ciudad: <b>{clima?.location.name}</b>
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
