
import React from 'react';

const Inicio: React.FC = () => {
    return (
        <div className=" bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans gap-10">
            {/* Inicio */}
            <section className="h-screen flex items-center justify-center text-center px-4">
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Luis Contreras
                    </h1>
                    <p className="mt-4 text-xl text-gray-300">
                        Ingeniero en Sistemas | Desarrollador Full Stack | Especialista en Soluciones Digitales
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <a
                            href="#about"
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Conóceme
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
                        >
                            Contáctame
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Inicio;

