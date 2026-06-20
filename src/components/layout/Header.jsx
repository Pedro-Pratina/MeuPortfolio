import { useEffect, useState } from "react";
import { LuMoon, LuSun, LuMenu, LuX } from "react-icons/lu";
import { useTheme } from "../../context/ThemeContext.jsx";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg shadow-cyan-500/10'
          : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          {"<PHRL />"}
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200" onClick={toggleTheme}>
            {theme === "light" ? <LuMoon size={20}/> : <LuSun size={20}/>}
          </button>

          <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <LuX size={20}/> : <LuMenu size={20}/>}
          </button>
        </div>
      </nav>

      <div className={`bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto p-4 flex flex-col gap-4">
          <a href="#inicio"
          className="text-left text-gray-700 py-2 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
           Início
          </a>
          <a href="#sobre"
          className="text-left text-gray-700 py-2 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
           Sobre
          </a>
          <a href="#skills"
          className="text-left text-gray-700 py-2 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
           Habilidades
          </a>
          <a href="#projetos"
          className="text-left text-gray-700 py-2 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
           Projetos
          </a>
          <a href="#contato"
          className="text-left text-gray-700 py-2 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
           Contato
          </a>
        </div>
      </div>
    </header>
  );
}