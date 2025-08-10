import { Github, ExternalLink } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import landingArtifys from "/src/assets/landingartifys.png";
import paginalavanderia from "/src/assets/landingartifys.png";
import portofolioweb from "/src/assets/portofolioweb.png";
import backendeccomerce from "/src/assets/backendeccomerce.png";
import kashy from "/src/assets/kashy.png";

const Proyectos: React.FC = () => {
    const projects = [
        {
            id: 1,
            name: "Landing Pages",
            description: "Landing pages para mi empresa de desarrollo.",
            img: landingArtifys,
            githubLink: "https://github.com/Luis2022cr/Landing-artifys",
            liveLink: "https://landing-artifys.pages.dev/",
        },
        {
            id: 2,
            name: "Pagina Lavanderia Prueba",
            description: "Pagina de lavanderia, pagina version preliminar, donde se gestiona pedidos, puntos y canges",
            img: paginalavanderia,
            githubLink: "#",
            liveLink: "https://lavanderia-occiclean-app.pages.dev/",
        },
        {
            id: 3,
            name: "Portfolio Web",
            description: "Mi portoflio web(Estamos actualmente).",
            img: portofolioweb,
            githubLink: "https://github.com/Luis2022cr/portfolio-web-luis",
            liveLink: "#",
        },
        {
            id: 4,
            name: "Backend Eccomerce",
            description: "Api desarrolada en Express.js y Typecript.",
            img: backendeccomerce,
            githubLink: "https://github.com/Luis2022cr/backend-tienda-online-profesional-v1",
            liveLink: "#",
        },
        {
            id: 5,
            name: "Control Finanzas personales (Kashy)",
            description: "App personal de uso propio para manejo de mis finanzas de una forma mas privada y precisa segun mis necesidades ",
            img: kashy,
            githubLink: "https://github.com/Luis2022cr/frontend-finanzas-personales",
            liveLink: "https://frontend-finanzas-personales.pages.dev/",
        },
    ]
    return (
        <>

            {/* Projects Section */}
            <section id="projects" className="py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-blue-200">
                    Mis Proyectos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative flex flex-col rounded-lg bg-blue-900/30 border border-blue-700/50 text-white overflow-hidden group
                           hover:border-blue-500/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg shadow-blue-900/20
                           before:absolute  before:bg-gradient-to-br before:from-blue-800/20 before:to-indigo-800/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex-grow">
                                <h3 className="text-2xl font-semibold mb-2 text-blue-100">
                                    {project.name}
                                </h3>
                                <p className="text-blue-200">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex justify-end gap-4 p-6 pt-0">
                                <Link
                                    to={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white border border-blue-600 hover:border-blue-700"
                                >
                                    <Github className="h-4 w-4 mr-2" /> GitHub
                                </Link>
                                <Link
                                    to={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white border border-cyan-500 hover:border-cyan-600"
                                >
                                    <ExternalLink className="h-4 w-4 mr-2" /> Ver Demo
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
};

export default Proyectos;