import { Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Contacto: React.FC = () => {
  return (
    <>

       {/* Contact Section */}
          <section id="contact" className="py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-200">
              Contáctame
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-10">
              ¿Tienes un proyecto en mente o simplemente quieres saludar? ¡No dudes en contactarme!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="mailto:josecon2731@gmail.com"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 bg-blue-700 hover:bg-blue-800 text-white border border-blue-600 hover:border-blue-700"
              >
                <Mail className="h-5 w-5 mr-2" /> Correo
              </Link>
              <Link
                to="https://www.linkedin.com/in/luis-contreras-233793319/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 bg-indigo-700 hover:bg-indigo-800 text-white border border-indigo-600 hover:border-indigo-700"
              >
                <Linkedin className="h-5 w-5 mr-2" /> LinkedIn
              </Link>
              <Link
                to="https://github.com/Luis2022cr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 bg-gray-700 hover:bg-gray-800 text-white border border-gray-600 hover:border-gray-700"
              >
                <Github className="h-5 w-5 mr-2" /> GitHub
              </Link>
            </div>
          </section>
    </>
  );
};

export default Contacto;