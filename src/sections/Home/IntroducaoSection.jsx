import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaJs} from "react-icons/fa"
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"

import { IconLink } from "../../components/ui/IconLink"

export function IntroducaoSection() {
    return (
        <section className="mt-10 flex flex-col text-(--cinzaClaro) justify-center items-center">
            <div className="relative justify-center flex">
                <div className="absolute opacity-30 inset-0 flex justify-center gap-15">
                    <div className="mt-8"><FaHtml5 className="text-2xl" /></div>
                    <div className="mt-4"><FaCss3Alt className="text-2xl" /></div>
                    <div className=""><FaJs className="text-2xl" /></div>
                    <div className="mt-4"><FaReact className="text-2xl" /></div>
                    <div className="mt-8"><FaNodeJs className="text-2xl" /></div>
                </div>
                <h1 className="text-(--textoTema) text-center text-5xl relative mt-20">
                    Olá, eu sou <br/><span className="text-(--textoDestaque)">Pedro Henrique</span>
                </h1>
            </div>
            <div className="mt-15 items-center text-(--textoTema) flex flex-col gap-2 text-xl">
                <p>Desenvolvedor Full-Stack</p>
                <p>Cursando Ciência da Computação</p>
            </div>
            <hr className="w-80 my-6 border-(--textoTema)"/>
            <div className="flex items-center gap-4 mt-2 text-(--cinzaClaro)">
                <IconLink href="https://github.com/Pedro-Pratina" icon={FiGithub} className="text-4xl"/>
                <div className="w-px h-6 bg-(--textoTema)" />
                <IconLink href="https://linkedin.com/in/pedrohrl" icon={FiLinkedin} className="text-4xl"/>
                <div className="w-px h-6 bg-(--textoTema)" />
                <IconLink href="https://instagram.com/pedropratina/" icon={FiInstagram} className="text-4xl"/>
            </div>
        </section>
    )
}