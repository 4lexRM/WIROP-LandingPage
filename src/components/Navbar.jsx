import React from 'react';

const Navbar = () => {
  return (
    // Usa className en lugar de class
    <nav className="navbar navbar-expand-lg navbar bg-navbar fixed-top">
      <div className="container">
        {/* Logo 1 - Ruta de imagen ajustada */}
        <a className="navbar-brand fw-bold d-flex align-items-center text-white" href="#">
          <img src="src/assets/img/rf_logo.png" alt="RF Solutions" height="35" />
        </a>

        {/* Logo 2 - Ruta de imagen ajustada */}
        <a className="navbar-brand fw-bold d-flex align-items-center text-white" href="#">
          <img src="src/assets/img/LogoNasa.png" alt="BLIND AI" height="30" />
        </a>
       
        {/* Navbar Toggler */}
        <button
          className="navbar-toggler border-0 text-accent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Reemplaza la etiqueta <span> con Font Awesome */}
          <span className="fas fa-bars text-white"></span>
        </button>

        {/* Links de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how-it-works">¿Cómo funciona?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#download">WIROP</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;