// src/components/Download.jsx
import React from 'react';

const Download = () => {
  return (
    // Reemplaza class por className
    <section id="download" className="bg-primary text-white py-5">
      <div className="container">
        <h2 className="fw-bold text-center">Acceso</h2>
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <p className="lead mb-4">Accede a WIROP!</p>
            {/* Los links de Drive se mantienen */}
            <a 
              href="https://drive.google.com/file/d/1AzR41baay-8Vvj65ilwH6yLPgKckiXyN/view?usp=sharing" 
              target="_blank" 
              className="btn btn-primary btn-lg text-white mx-3"
              rel="noopener noreferrer" // Recomendado por seguridad
            >
              Web
            </a>
            <a 
              href="https://drive.google.com/file/d/1AzR41baay-8Vvj65ilwH6yLPgKckiXyN/view?usp=sharing" 
              target="_blank" 
              className="btn btn-primary btn-lg text-white"
              rel="noopener noreferrer" // Recomendado por seguridad
            >
              App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;