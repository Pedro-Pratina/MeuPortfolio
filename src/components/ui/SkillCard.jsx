export function SkillCard({ skill }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-(--cardSkill) rounded-lg border border-(--cinzaClaro)">
            <img src={skill.icon} alt={skill.alt} className="w-12 h-12 mb-2" />
            <p className="text-xs text-(--cinzaClaro) opacity-50">{skill.name}</p>
        </div>
    )
}