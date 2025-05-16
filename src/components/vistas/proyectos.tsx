import React from 'react';

const Proyectos: React.FC = () => {
    return (
        <div className=" bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans gap-10">

            {/* Seccion de proyectos */}
            <section id="projects" className="py-32">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Proyectos Destacados
                    </h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Proyecto 1 */}
                        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold text-blue-400">Landing Pages</h3>
                            <p className="mt-2 text-gray-300">
                                Landing pages para mi empresa de desarrollo
                            </p>
                            <div className='flex flex-col'>

                                <a
                                    href="https://landing-artifys.pages.dev/"
                                    target='_black'
                                    className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Ver más →
                                </a>
                                <a
                                    href="https://landing-artifys.pages.dev/"
                                    target='_black'
                                    className="mt-4 inline-block text-cyan-400 hover:text-blue-300 transition-colors"
                                >
                                    Github →
                                </a>
                            </div>
                        </div>
                        {/* Proyecto 2 */}
                        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold text-green-400">Pagina Lavanderia Prueba</h3>
                            <p className="mt-2 text-gray-300">
                                Pagina de lavanderia, pagina version preliminar
                            </p>
                            <a
                                href="https://artifys.online/"
                                target='_black'
                                className="mt-4 inline-block text-green-400 hover:text-green-300 transition-colors"
                            >
                                Ver más →
                            </a>
                        </div>
                        {/* Proyecto 3 */}
                        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold text-purple-400">Portfolio</h3>
                            <p className="mt-2 text-gray-300">
                                mi portoflio web(Estamos actualmente)
                            </p>
                            <div className='flex flex-col'>

                                <a
                                    href="/"
                                    target='_black'
                                    className="mt-4 inline-block text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    Ver más →
                                </a>
                                <a
                                    href="https://github.com/Luis2022cr/portfolio-web-luis"
                                    target='_black'
                                    className="mt-4 inline-block text-cyan-400 hover:text-purple-300 transition-colors"
                                >
                                    Github →
                                </a>
                            </div>
                        </div>
                        {/* Proyecto 4 */}
                        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold text-purple-400">Backend Eccomerce</h3>
                            <p className="mt-2 text-gray-300">
                                Api desarrolada en Express.js y Typecript
                            </p>
                            <div className='flex flex-col'>
                                <a
                                    href="https://github.com/Luis2022cr/backend-tienda-online-profesional-v1"
                                    target='_black'
                                    className="mt-4 inline-block text-cyan-400 hover:text-purple-300 transition-colors"
                                >
                                    Github →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Proyectos;