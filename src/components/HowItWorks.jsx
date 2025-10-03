// src/components/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-light py-5">
      <div className="container">
        <h2 className="fw-bold text-center">¿Cómo Funciona?</h2>
        <div className="row row-cols-1 row-cols-md-3 py-5 text-center">
          
          {/* Paso 1 */}
          <div className="col d-flex">
            <div className="card mb-4 rounded-3 shadow-sm border-primary w-100">
              <div className="card-header py-3 bg-primary border-primary">
                <h4 className="my-0 fw-normal text-white">1. Elige Lugar y Fecha</h4>
              </div>
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex align-items-center justify-content-center rounded-circle mb-3 circle-icon-bg">
                  {/* Ruta de imagen corregida */}
                  <img src="/src/assets/img/seis.png" alt="Icono de Ubicación y Fecha" />
                </div>
                <p>Ve a nuestro sitio web, escribe o selecciona la ubicación que desees y luego elige una fecha para el pronóstico.</p>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="col d-flex">
            <div className="card mb-4 rounded-3 shadow-sm border-primary w-100">
              <div className="card-header py-3 bg-primary border-primary">
                <h4 className="my-0 fw-normal text-white">2. Obtén tu Pronóstico</h4>
              </div>
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex align-items-center justify-content-center rounded-circle mb-3 circle-icon-bg">
                  {/* Ruta de imagen corregida */}
                  <img src="/src/assets/img/siete.png" alt="Icono de Obtener Pronóstico" />
                </div>
                <p>Presiona el botón de búsqueda para generar la predicción para el área y la fecha seleccionadas.</p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="col d-flex">
            <div className="card mb-4 rounded-3 shadow-sm border-primary w-100">
              <div className="card-header py-3 bg-primary border-primary">
                <h4 className="my-0 fw-normal text-white">3. Analiza los Datos</h4>
              </div>
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex align-items-center justify-content-center rounded-circle mb-3 circle-icon-bg">
                   {/* Ruta de imagen corregida */}
                   <img src="/src/assets/img/ocho.png" alt="Icono de Analizar Datos" />
                </div>
                <p>Explora los resultados y selecciona las variables climáticas específicas que quieres ver, como temperatura, precipitación y más.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;