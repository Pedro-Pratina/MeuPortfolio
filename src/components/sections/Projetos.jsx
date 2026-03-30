import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaGear } from 'react-icons/fa6';

import { projetoLista } from '../../data/projetosLista';
const projects = projetoLista;

export function Projetos() {
    
    return (
        <section id="projetos" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-gray-900 to-cyan-600 bg-clip-text text-transparent">
                        Projetos em Destaque
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                </div>
                <div className="max-w-7xl mx-auto grid gap-8">
                    {projects.map((project, index) => (
                        <div
                        key={index}
                        className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200"
                        >
                            <div className="relative h-64 overflow-hidden bg-gray-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 duration-500" />
                                <div className="absolute inset-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 flex items-center justify-center gap-4">
                                        <a
                                        href={project.github}
                                        className="p-3 rounded-full bg-white text-gray-900"
                                        aria-label="Ver no GitHub"
                                        >
                                            <FiGithub size={20} />
                                        </a>
                                        <a
                                        href={project.live}
                                        className="p-3 rounded-full bg-white text-gray-900 shadow-lg"
                                        aria-label="Visitar projeto"
                                        >
                                            <FiExternalLink size={20} />
                                        </a>
                                    </div>
                                    {
                                        !project.desenvolvido && (
                                            <span className="absolute left-1/2 top-7/10 sm:top-2/3 translate-x-[-50%] translate-y-[-50%] text-white/90 text-sm text-center flex items-center bg-orange-500/60 backdrop-blur-sm px-3 py-1 border border-white/20 rounded-xl gap-2 opacity-90 cursor-default">
                                                <FaGear size={16} className='animate-spin [animation-duration:3s]'/>Em Desenvolvimento <FaGear size={16} className='animate-spin [animation-duration:3s]'/>
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.skill.map((skill) => (
                                        <span
                                        key={skill}
                                        className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-600 border border-cyan-500/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                    href="https://github.com/pedro-pratina"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-cyan-500 text-cyan-600 font-semibold"
                    >
                        Ver meu GitHub completo
                        <FiExternalLink size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
