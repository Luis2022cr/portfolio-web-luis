import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

const Contacto: React.FC = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans gap-10">

      {/* Seccion de contacto */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contacto
          </h2>
          <p className="mt-4 text-gray-300">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/Luis2022cr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-contreras-233793319/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://x.com/ArtifysSolution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaXTwitter className="text-3xl" />
            </a>
            <a
              href="mailto:josecon2731@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FiMail className="text-3xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;