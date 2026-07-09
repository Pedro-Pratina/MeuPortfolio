import { LuMail, LuGithub, LuLinkedin, LuSend } from 'react-icons/lu';

import { useForm } from 'react-hook-form';

export function Contatos() {
  const socialLinks = [
    {
      icon: <LuGithub size={24} />,
      label: 'GitHub',
      href: 'https://github.com/Pedro-Pratina',
      color: 'hover:text-gray-900',
    },
    {
      icon: <LuLinkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/pedrohrl',
      color: 'hover:text-blue-600',
    },
    {
      icon: <LuMail size={24} />,
      label: 'Email',
      href: 'mailto:pedro23reislima@gmail.com',
      color: 'hover:text-cyan-500',
    },
  ];

    return (
        <section id="contatos" className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 to-cyan-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
                        Vamos Trabalhar Juntos
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Conecte-se comigo nas redes sociais ou envie um email direto
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div>
                        <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-center">
                                Entre em Contato
                            </h3>

                            <div className="space-y-4 mb-8">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                                    >
                                        {link.icon}
                                        <span className="font-medium">{link.label}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-white/20">
                                <p className="text-sm text-cyan-50 text-center mb-4">
                                    <strong>Disponível para:</strong>
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white/10 rounded-lg p-3 text-center text-sm">
                                        Projetos Freelance
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-3 text-center text-sm">
                                        Oportunidades Full-time
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-3 text-center text-sm">
                                        Consultorias
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-3 text-center text-sm">
                                        Colaborações
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
