import { FaHeart, FaCode } from "react-icons/fa"

export function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
                            <FaCode size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold bg-linear-to-r from-gray-900 to-cyan-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent mb-2">
                            Full-Stack Developer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Transformando ideias em código
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        {['Início', 'Sobre', 'Skills', 'Projetos', 'Contatos'].map((item) => (
                            <button
                              key={item}
                              onClick={() => {
                                const id = item === 'Início' ? 'apresentacao' : item.toLowerCase();
                                document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
                      <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                        © {anoAtual} • Feito com
                        <FaHeart size={16} className="text-red-500 fill-red-500 animate-pulse" />
                        e muito
                        <FaCode size={16} className="text-cyan-500" />
                      </p>
                  </div>
                </div>
            </div>
        </footer>
    )
}