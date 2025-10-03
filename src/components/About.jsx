// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center">¿Por qué elegir Wirop?</h2>
        <div className="row justify-content-center g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-2">

          {/* Bloque 1 */}
          <div className="col d-flex">
            <div className="card text-center shadow-sm p-4 border-0">
              <div className="d-flex justify-content-center">
                <div className="mb-3 d-flex align-items-center justify-content-center rounded-circle circle-icon-bg">
                  {/* Ruta de imagen corregida */}
                  <img src="/src/assets/img/dos.png" alt="Icono Qué es Wirop" />
                </div>
              </div>
              <h3 className="fs-2 text-body-emphasis">¿Qué es Wirop?</h3>
              <p>Una plataforma de inteligencia climática que te permite ver el futuro. Obtén pronósticos precisos para cualquier lugar y en cualquier fecha.</p>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="col d-flex">
            <div className="card text-center shadow-sm p-4 border-0">
              <div className="d-flex justify-content-center">
                <div className="mb-3 d-flex align-items-center justify-content-center rounded-circle circle-icon-bg">
                  {/* Ruta de imagen corregida */}
                  <img src="/src/assets/img/tres.png" alt="Icono Fácil de Usar" />
                </div>
              </div>
              <h3 className="fs-2 text-body-emphasis">Fácil de Usar</h3>
              <p>Interfaz intuitiva: solo ingresa tu destino o selecciónalo en el mapa y elige la fecha que quieres consultar.</p>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="col d-flex">
            <div className="card text-center shadow-sm p-4 border-0">
              <div className="d-flex justify-content-center">
                <div className="mb-3 d-flex align-items-center justify-content-center rounded-circle circle-icon-bg">
                  {/* Ruta de imagen corregida */}
                  <img src="/src/assets/img/cuatro.png" alt="Icono Tecnología Innovadora" />
                </div>
              </div>
              <h3 className="fs-2 text-body-emphasis">Tecnología Innovadora</h3>
              <p>Usamos IA avanzada para predecir el clima con alta precisión y recomendar los mejores momentos para tus planes.</p>
            </div>
          </div>

          {/* Bloque 4 */}
          <div className="col d-flex">
            <div className="card text-center shadow-sm p-4 border-0">
              <div className="d-flex justify-content-center">
                <div className="mb-3 d-flex align-items-center justify-content-center rounded-circle circle-icon-bg">
                  {/* Ruta de imagen corregida */}
                  <img src="/src/assets/img/cinco.png" alt="Icono Planea Sin Sorpresas" />
                </div>
              </div>
              <h3 className="fs-2 text-body-emphasis">Planea Sin Sorpresas</h3>
              <p>Perfecto para organizar tus vacaciones, eventos al aire libre, proyectos agrícolas o cualquier actividad donde el clima es un factor clave.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;