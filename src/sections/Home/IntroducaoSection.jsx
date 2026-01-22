import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaJs} from "react-icons/fa"

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
                <h1 className="text-(--textoTema) text-center text-4xl relative mt-20">
                    Olá, eu sou <br/><span className="text-(--textoDestaque)">Pedro Henrique</span>
                </h1>
            </div>
            <div className="mt-6 items-center text-(--textoTema) flex flex-col gap-2">
                <p className="text-lg">Desenvolvedor Full-Stack</p>
                <p>Cursando Ciência da Computação</p>
            </div>
            <hr className="w-80 mt-4 border-(--textoTema)"/>
        </section>
    )
}