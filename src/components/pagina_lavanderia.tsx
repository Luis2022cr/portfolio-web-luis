import React from "react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-800 py-5 shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-wide">Occiclean</h1>
          <nav>
            <ul className="flex space-x-6">
              {['Servicios', 'Precios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-indigo-900 text-white py-32 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-5xl font-extrabold mb-4">Bienvenido a Occiclean</h2>
          <p className="text-xl mb-8">Tu ropa limpia y fresca por solo 15 lempiras la libra.</p>
          <a href="#contact" className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold shadow-md hover:bg-yellow-500 transition duration-300">
            Contáctanos
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {["Lavado Básico", "Planchado", "Servicio Express"].map((service, index) => (
            <motion.div key={service} className="bg-gray-800 p-6 rounded-xl shadow-md" whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">{service}</h3>
              <p className="text-gray-300">{index === 0 ? "Limpieza estándar para todo tipo de ropa." : index === 1 ? "Ropa perfectamente planchada y lista para usar." : "Entrega rápida en menos de 24 horas."}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="bg-gray-800 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-8">Nuestros Precios</h2>
        <div className="bg-gray-900 p-8 rounded-xl shadow-md inline-block">
          <p className="text-3xl font-bold text-yellow-400 mb-4">Solo 15 Lempiras</p>
          <p className="text-gray-300">Por cada libra de ropa.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-8">Contáctanos</h2>
        <form className="max-w-md mx-auto bg-gray-800 p-8 rounded-xl shadow-md">
          <input type="text" placeholder="Nombre" className="w-full px-4 py-3 mb-4 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400" />
          <input type="email" placeholder="Correo Electrónico" className="w-full px-4 py-3 mb-4 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400" />
          <textarea placeholder="Mensaje" rows={4} className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400"></textarea>
          <button type="submit" className="mt-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-md hover:bg-yellow-500 transition duration-300">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>&copy; 2024 Occiclean. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
