import { LuMoon, LuSun, LuMenu, LuX } from "react-icons/lu";

export function Header() {
  const theme = "light";
  const menuOpen = false;
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg shadow-lg shadow-cyan-500/15`}>
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          {"<PHRL />"}
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg bg-gray-100 text-gray-800">
            {theme === "light" ? <LuMoon size={20}/> : <LuSun size={20}/>}
          </button>

          <button className="p-2 rounded-lg bg-gray-100 text-gray-800">
            {menuOpen ? <LuX size={20}/> : <LuMenu size={20}/>}
          </button>
        </div>
      </nav>

      <div className={`bg-white border-t border-gray-200 ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto p-4 flex flex-col gap-4">
          <a href="#inicio"
          className="text-left text-gray-700 py-2">
           Início
          </a>
          <a href="#sobre"
          className="text-left text-gray-700 py-2">
           Sobre
          </a>
          <a href="#skills"
          className="text-left text-gray-700 py-2">
           Habilidades
          </a>
          <a href="#projetos"
          className="text-left text-gray-700 py-2">
           Projetos
          </a>
          <a href="#contato"
          className="text-left text-gray-700 py-2">
           Contato
          </a>
        </div>
      </div>
    </header>
  );
}