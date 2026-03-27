import { FiZap, FiTarget, FiUser } from "react-icons/fi";

export function Sobre() {
    return (
        <section id="sobre" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-gray-900 to-cyan-600 bg-clip-text text-transparent">
                        Sobre Mim
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-12">
                        <div className="flex flex-col gap-8 items-center">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50" />
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-3 border-white shadow-2xl">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/160922340?v=4"
                                        alt="Foto de Perfil"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 text-center">
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras e eficientes. 
                                    Especializado em <span className="text-cyan-600 font-semibold">React</span> e <span className="text-cyan-600 font-semibold">Node.js</span>
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Com forte habilidade técnica e paixão por aprender, transformo ideias em produtos digitais.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <span className="mb-4"><FiZap className="text-cyan-500" size={32}/></span>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                Desenvolvimento Rápido
                            </h3>
                            <p className="text-gray-600">
                                Entregas ágeis sem comprometer a qualidade, garantindo resultados rápidos e eficientes
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <span className="mb-4"><FiTarget className="text-cyan-500" size={32}/></span>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                Foco em Resultados
                            </h3>
                            <p className="text-gray-600">
                                Soluções que geram impacto real, alinhadas aos objetivos do cliente
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <span className="mb-4"><FiUser className="text-cyan-500" size={32}/></span>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                Experiência do Usuário
                            </h3>
                            <p className="text-gray-600">
                                Interfaces intuitivas e modernas, proporcionando a melhor experiência possível
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}