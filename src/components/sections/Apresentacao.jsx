import { FaCode, FaGear, FaArrowDown } from "react-icons/fa6";

export function Apresentacao() {
    const skillApresentacao = ["React", "Node.js", "Tailwind", "MySQL", "JavaScript", "HTML5", "CSS3"];
    return (
        <section id="apresentacao" className="min-h-screen flex items-center justify-center relative bg-linear-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50">
                        <FaCode size={40} className="text-white"/>
                    </div>
                    <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-gray-900 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        Full-Stack <br/>Developer
                    </h1>
                    <div className="flex items-center justify-center gap-3 mb-8 text-xl text-gray-600">
                        <FaGear size={24} className="text-cyan-500 animate-spin [animation-duration:3s]"/>
                        <span>Construindo sonhos através do código, uma linha de cada vez</span>
                        <FaGear size={24} className="text-cyan-500 animate-spin [animation-duration:3s]"/>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                        {
                            skillApresentacao.map((skill, index) => (
                                <span key={index} className="px-4 py-2 rounded-full bg-white border border-gray-200  text-gray-700 shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-500/50 transition-all cursor-default">
                                    {skill}
                                </span>
                            ))
                        }
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#projetos" className="px-8 py-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all">
                            Ver Projetos
                        </a>
                        <a href="#contato" className="px-8 py-4 rounded-xl border-2 border-cyan-500 text-cyan-600 font-semibold hover:bg-cyan-500/10 transition-all">
                            Entrar em Contato
                        </a>
                    </div>
                </div>
            </div>
            <a href="#sobre" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-cyan-500 transition-colors animate-bounce">
                <FaArrowDown size={20} />
            </a>
        </section>
    )
}