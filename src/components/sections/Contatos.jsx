import { LuMail, LuGithub, LuLinkedin, LuSend } from 'react-icons/lu';

import { useForm } from 'react-hook-form';

import toast from "react-hot-toast";
import { ToastForm } from "../ui/ToastForm";

export function Contatos() {
    const { register, handleSubmit, reset, formState:{errors, isSubmitting} } = useForm()
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
                formData.append("access_key", "a5453efe-e3fe-4d37-a1e0-d3d00a2bfc4a");
                formData.append("name", data.name);
                formData.append("email", data.email);
                formData.append("message", data.message);
                formData.append("subject", "Novo contato do portfólio");
                formData.append("from_name", "Portfólio");
                formData.append("botcheck", data.botcheck);

            const resposta = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            })
            const resultado = await resposta.json()
            if(resultado.success){
                toast.custom((t) => (<ToastForm t={t} sucess mensagem="Mensagem enviada com sucesso" />))
                reset()
            } else {
                toast.custom((t) => (<ToastForm t={t} erro mensagem={resultado.message} />))
                console.log(resultado.message)
            }
        } catch (error) {
            toast.custom((t) => (<ToastForm t={t} connect mensagem="Problema de conexão"/>));
        }
    }

  const socialLinks = [
    {
      icon: <LuGithub size={24} />,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: <LuLinkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600',
    },
    {
      icon: <LuMail size={24} />,
      label: 'Email',
      href: 'mailto:dev@example.com',
      color: 'hover:text-cyan-500',
    },
  ];

    return (
        <section id="contatos" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-gray-900 to-cyan-600 bg-clip-text text-transparent">
                        Vamos Trabalhar Juntos
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
                    <p className="text-lg text-gray-600">
                        Pronto para transformar sua ideia em realidade?
                    </p>
                </div>
                <div className="max-w-5xl mx-auto grid gap-12">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <input type="text" {...register("botcheck")} className="hidden" />
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: "Nome obrigatório" })}
                                    className="w-full px-4 py-3 rounded-xl bg-white border-gray-300 text-gray-900"
                                    placeholder="Seu nome"
                                />
                                {errors.name && <span>{errors.name.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", { required: "Email obrigatório",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Email inválido"
                                        }
                                     })}
                                    className={`w-full px-4 py-3 rounded-xl bg-white border text-gray-900 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="seu@email.com"
                                />
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    {...register("message", { required: "Mensagem obrigatória", minLength: { value: 10, message: "Mensagem muito curta" } })}
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900"
                                    placeholder="Conte-me sobre seu projeto..."
                                />
                                {errors.message && <span>{errors.message.message}</span>}
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/50"
                            >
                                <LuSend size={20} />
                                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">
                                Outras formas de contato
                            </h3>
                            <p className="mb-8 text-cyan-50">
                                Conecte-se comigo nas redes sociais ou envie um email direto
                            </p>
                            <div className="space-y-4">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                                    >
                                        {link.icon}
                                        <span className="font-medium">{link.label}</span>
                                    </a>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/20">
                                <p className="text-sm text-cyan-50">
                                    <strong>Disponível para:</strong>
                                </p>
                                <ul className="mt-2 space-y-2 text-sm text-cyan-50">
                                    <li>• Projetos Freelance</li>
                                    <li>• Oportunidades Full-time</li>
                                    <li>• Colaborações</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    );
}
