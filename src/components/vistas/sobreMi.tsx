import React from 'react';

const SobreMi: React.FC = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans gap-10">

       {/* Seccion Sobre Mi */}
       <section id="about" className="py-32 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center">
            {/* Foto */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://pub-f664d02abdda4d49944c0443c9a67cd1.r2.dev/foto_perfil.webp"
                alt="Luis Contreras"
                className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg"
              />
            </div>
            {/* Contenido */}
            <div className="md:w-2/3 mt-8 md:mt-0 md:pl-12">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Sobre Mí
              </h2>
              <p className="mt-4 text-gray-300">
                Hola, soy Luis Contreras, Ingeniero en Sistemas.
                Me especializo en crear soluciones digitales innovadoras y escalables para empresas
                de todos los tamaños. he trabajado en proyectos
                que van desde aplicaciones web simples, hasta proyectos mas complejos.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-200">Habilidades</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full">
                    React
                  </span>
                  <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full">
                    Node.js
                  </span>
                  <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full">
                    TypeScript
                  </span>
                  <span className="px-4 py-2 bg-gray-500/10 text-gray-400 rounded-full">
                    Express.js
                  </span>
                  <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="px-4 py-2 bg-red-500/10 text-red-400 rounded-full">
                    Diseño UI/UX
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SobreMi;