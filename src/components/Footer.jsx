import React from 'react';

const Footer = () => {
  return (
    <div className="container text-center py-5">
      {/* Row containing the footer content, divided into columns */}
      <div className="row">
        {/* Navigation Links Column */}
        <div className="col-md-4 mb-3">
          <h5 className="fw-bold">Links</h5>
          <ul className="list-unstyled">
            <li><a href="#hero" className="text-dark text-decoration-none footer-links">Inicio</a></li>
            <li><a href="#about" className="text-dark text-decoration-none footer-links">Acerca de</a></li>
            <li><a href="#how-it-works" className="text-dark text-decoration-none footer-links">¿Cómo funciona?</a></li>
            <li><a href="#contact" className="text-dark text-decoration-none footer-links">Contacto</a></li>
            <li><a href="#download" className="text-dark text-decoration-none footer-links">Acceso a WIROP</a></li>
          </ul>
        </div>

        {/* Contact Information Column */}
        <div className="col-md-4 mb-3">
          <h5 className="fw-bold text-dark">Contacto</h5>
          <p className="mb-1 text-dark">
            <i className="fa-solid fa-envelope"></i> rfsolutionscompany@gmail.com
          </p>
          <p className="text-dark">
            <i className="fa-solid fa-phone"></i> +52 715 114 3336
          </p>
        </div>

        {/* Social Media Links Column */}
        <div className="col-md-4">
          <h5 className="fw-bold">Siguenos</h5>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/rfsolutionsof" className="text-dark me-3 footer-links" target="_blank" rel="noopener noreferrer">
            <p className="m-0 text-dark">
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </p>
          </a>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@rfsolutionscompany?_t=ZS-90056EC37Gi&_r=1" className="text-dark me-3 footer-links" target="_blank" rel="noopener noreferrer">
            <p className="m-0 text-dark">
              <i className="fa-brands fa-tiktok fa-lg"></i>
            </p>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/rfsolutionsof?igsh=MXVuNG8zNm5ocXljdA==" className="text-dark me-3 footer-links" target="_blank" rel="noopener noreferrer">
            <p className="m-0 text-dark">
              <i className="fa-brands fa-instagram fa-lg"></i>
            </p>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-3">
        <p className="mb-0">&copy; 2025 WIROP. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;