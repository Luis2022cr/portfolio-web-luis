import { motion } from 'framer-motion';
import React from 'react';

const SobreMi: React.FC = () => {
  return (
    <>
          <section className="relative flex flex-col items-center justify-center text-center py-20 md:py-32 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="z-10"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Hola, soy Luis Contreras
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8">
                Ingeniero de Sistemas | Desarrollador Full-Stack
              </p>
              <p className="max-w-3xl mx-auto text-lg text-blue-100 mb-10">
                Apasionado por construir soluciones innovadoras y eficientes. Con experiencia en el desarrollo de aplicaciones robustas y escalables, transformo ideas complejas en experiencias digitales intuitivas y de alto rendimiento.
              </p>
              {/* <Link
                to="projects"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 hover:border-blue-600 transition-all duration-300 group"
              >
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link> */}
            </motion.div>

            {/* Futuristic background elements */}
            <div className="absolute inset-0 z-0 opacity-20">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"
              />
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"
              />
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                className="absolute top-1/3 right-1/3 w-56 h-56 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"
              />
            </div>
          </section>

    </>
  );
};

export default SobreMi;