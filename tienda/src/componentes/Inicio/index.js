import React from 'react';
import Portada from "../../images/PantallaInicio.jpg";
import 'boxicons';
import './inicio.css';

export const Inicio = () => {
  const facebookLink = "https://www.facebook.com/profile.php?id=100057262607106";
  const whatsappLink = "https://api.whatsapp.com/send?phone=+50258153177&data=ARDw2lFPd6mOksFzoN8DQr9IK2Hh3vAfdLDLzkAVKd6bNUAUSUy4WgSbqofWuf0B9x6iYQoE7VqocSnpkeoUsla9TvKGAfWCg79erS3tEmOteyfENacoWiV5yUfdZCADBD4A0t3PgvvJKHnesPoOAGAgMQ";
  const instagramLink = "https://instagram.com/compumundo.xela?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr";

  return (
    <div className="inicio">
      <div className="imagen-container">
        <img src={Portada} alt="inicio" className="imagen-portada" />
      </div>
      <div className="redes-sociales" style={{ textAlign: 'center' }}>
        <a href={facebookLink} className="redes-icon">
          <box-icon
            name='facebook'
            type='logo'
          ></box-icon>
        </a>
        <a href={whatsappLink} className="redes-icon">
          <box-icon
            name='whatsapp'
            type='logo'
          ></box-icon>
        </a>
        <a href={instagramLink} className="redes-icon">
          <box-icon
            name='instagram'
            type='logo'
          ></box-icon>
        </a>
      </div>
    </div>
  );
};
