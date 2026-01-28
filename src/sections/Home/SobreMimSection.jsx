export function SobreMimSection() {
    return (
        <section id="sobre-mim" className="flex flex-col justify-center items-center m-10 gap-10">
            <h2 className="text-2xl text-(--textoDestaque)">Sobre Mim</h2>
            <div className="flex flex-col justify-center items-center gap-10 text-(--textoTema) text-left text-lg">
                <img
                    src="https://github.com/Pedro-Pratina.png" alt="Foto do Pedro"
                    className="w-40 h-40 rounded-full object-cover border-2 border-muted"
                />
                <p>
                    Sou Pedro Henrique Reis Lima, conhecido como Pratina, tenho 18 anos e sou formado no Ensino Médio integrado ao Técnico em Tecnologia da Informação pelo UNASP. Meu primeiro contato com programação ocorreu em 2022, por meio da customização de mods de jogos, o que despertou meu interesse em compreender e desenvolver sistemas desde a base.
                </p>
                <p>
                    Atualmente, curso Ciências da Computação, onde aprofundo fundamentos da área. Paralelamente, desenvolvi projetos utilizando HTML, CSS, JavaScript e MySQL, tive contato com Node.js e estudo React, com foco no desenvolvimento front-end.
                </p>
            </div>
        </section>
    )
}