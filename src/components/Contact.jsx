// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center">Contacto</h2>
        <div className="row">
          <div className="col-md-6 mx-auto p-5 bg-light">
            {/* El formulario se mantiene con la acción externa */}
            <form id="contact-form" action="https://formsubmit.co/rfsolutionscompany@gmail.com" method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
              </div>
              <input type="hidden" name="_next" value="https://blindai.netlify.app" />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;