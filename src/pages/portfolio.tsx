// src/pages/Portfolio.tsx
import React from 'react';
import Inicio from '@/components/vistas/inicio';
import SobreMi from '@/components/vistas/sobreMi';
import Proyectos from '@/components/vistas/proyectos';
import Contacto from '@/components/vistas/contacto';

const Portfolio: React.FC = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans gap-10">
      {/* Navbar */}
      <nav className="p-6 bg-gray-800/50 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Portfolio web
          </h1>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-blue-400 transition-colors">Sobre Mí</a>
            {/* <a href="#skills" className="hover:text-blue-400 transition-colors">Habilidades</a> */}
            <a href="#projects" className="hover:text-blue-400 transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>
      <Inicio/>
      <SobreMi/>
      <Proyectos/>
      <Contacto/>
     
    </div>
  );
};

export default Portfolio;