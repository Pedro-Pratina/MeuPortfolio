import { skillCategorias } from "../../data/skillCategorias";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-gray-900 to-cyan-600 bg-clip-text text-transparent">
            Skills & Tecnologias
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto grid gap-8 mb-16">
            {skillCategorias.map((category, index) => {
                const Icon = category.icon;
                return(
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Icon className="text-cyan-500" size={28} />
                            <h3 className="text-2xl font-bold text-gray-900">
                                {category.title}
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-lg bg-linear-to-br from-cyan-500/10 to-blue-500/10 text-gray-700 border border-cyan-500/30 cursor-default"
                            >
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}