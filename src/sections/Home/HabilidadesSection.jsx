import { skills } from "../../data/skills";
import { SkillCard } from "../../components/ui/SkillCard";

export function HabilidadesSection() {
    return (
        <section className="flex flex-col justify-center items-center m-10 gap-10" id="habilidades">
            <h2 className="text-2xl text-(--textoDestaque)">Habilidades</h2>
            <div className="text-(--textoTema) gap-10 flex flex-col w-full">
                <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-semibold">Tecnologias que domino</h3>
                    <p className="text-lg">Essas são as principais linguagens, bibliotecas e frameworks que utilizo nos meus projetos. Estou sempre aberto a aprender novas tecnologias conforme as necessidades de cada desafio.</p>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {
                        skills.map((skill) => (
                            <SkillCard 
                                key={skill.name}
                                skill={skill}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}