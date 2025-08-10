
import png from "/src/assets/grid.png"
import Contacto from "./components/vistas/contacto";
import Proyectos from "./components/vistas/proyectos";
import Habilidades from "./components/vistas/Habilidades";
import SobreMi from "./components/vistas/sobreMi";
// src/App.tsx
const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-cyan-950 text-white font-sans relative overflow-hidden">
        {/* Background Grid/Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            style={{ backgroundImage: `url(${png})` }}
          />
        </div>

        <main className="container mx-auto px-4 py-12 space-y-24 relative z-10">
          <SobreMi />
          <Habilidades />
          <Proyectos />
          <Contacto />
        </main>
      </div>
    </>
  );
};

export default App;
