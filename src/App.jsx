// src/App.jsx
import React from 'react';
// Importa todos los nuevos y viejos componentes
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

function App() {
  return (
    <>
      {/* 1. Usar el componente Navbar */}
      <header>
        <Navbar />
      </header>

      <main>
        {/* 2. Usar los componentes en el cuerpo principal */}
        
        {/* Se eliminan los <div> id="hero" para usar el componente directamente */}
        <Hero />

        {/* Se eliminan los <div> id="about" */}
        <About />

        {/* Se eliminan los <div> id="technologies" */}
        <HowItWorks />
        
        {/* Se eliminan los <div> id="contact" */}
        <Contact />

        {/* Se eliminan los <div> id="download" */}
        <Download />
      </main>

      {/* 3. Usar el componente Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;