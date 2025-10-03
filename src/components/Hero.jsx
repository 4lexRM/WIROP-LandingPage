// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    // Reemplaza class por className
    <section id="hero" className="bg-hero min-vh-100 container-fluid d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center text-center text-md-start py-5">
          {/* Texto y botón de descarga */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-white">Wirop</h1>
            <p className="lead mb-4 text-white">
              Si está planeando un evento al aire libre, como unas vacaciones,
              una caminata por un sendero o pescar en un lago, sería útil saber
              la probabilidad de mal tiempo para la fecha y el lugar que está 
              considerando. Eso es lo que hace Wirop.
            </p>                
            {/* Si quieres re-incluir el link, usa el componente Link si usas router, o un <a> normal */}
            {/* <a href="https://drive.google.com/file/d/1AzR41baay-8Vvj65ilwH6yLPgKckiXyN/view?usp=sharing" className="d-inline-block mb-4" target="_blank">
                <img src="app/assets/img/google_play.png" alt="Descargar en Google Play" 
                     className="img-fluid" style={{ width: '180px' }} />
            </a> */}
          </div>
          {/* Imagen - La ruta debe ser relativa a la carpeta public/ o importada */}
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <img 
              src="src/assets/img/logo-1.png" // Asumiendo que moviste la imagen a public/images
              alt="Ilustración de la aplicación Blind AI" 
              className="img-fluid w-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;