
import { FileCode, Palette, Type, Layers, Zap, Code, Server } from 'lucide-react';
import React from 'react';

const Habilidades: React.FC = () => {
      const skills = [
    { name: "HTML", icon: <FileCode className="h-8 w-8 text-orange-500" /> },
    { name: "CSS", icon: <Palette className="h-8 w-8 text-blue-500" /> },
    { name: "Node.js", icon: <Server className="h-8 w-8 text-green-500" /> },
    { name: "TypeScript", icon: <Type className="h-8 w-8 text-blue-500" /> },
    { name: "React", icon: <Layers className="h-8 w-8 text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <Zap className="h-8 w-8 text-sky-400" /> },
    { name: "Express.js", icon: <Code className="h-8 w-8 text-gray-400" /> },
  ];

    return (
        <>
             {/* Skills Section */}
          <section id="skills" className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
              Mis Conocimientos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative flex flex-col items-center justify-center p-6 rounded-lg bg-blue-900/30 border border-blue-700/50 text-white overflow-hidden
                           hover:border-blue-500/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg shadow-blue-900/20
                           before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-800/20 before:to-indigo-800/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    {skill.icon}
                    <h3 className="mt-4 text-xl font-semibold text-blue-100">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </>
    );
};

export default Habilidades;

