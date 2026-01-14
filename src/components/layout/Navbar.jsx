import { useState } from 'react'

import { Menu, X } from 'lucide-react'


export function Navbar() {
    const [menuAtivo, setMenuAtivo] = useState(false)

    const menuIcon = `
        absolute inset-0
        transition-all duration-800
        ${menuAtivo ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}
    `;
    const xIcon = `
        absolute inset-0
        transition-all duration-800
        ${menuAtivo ? "rotate-180 opacity-100" : "rotate-0 opacity-0"}
    `;

    return (
        <>
        <header className="bg-(--fundoSecundario) text-(--cinzaClaro) relative z-50">
            <nav className='flex items-center justify-between p-4'>
                <span className="text-xl">&lt;PHRL /&gt;</span>
                <button onClick={() => setMenuAtivo(!menuAtivo)} className='relative w-6 h-6'>
                    <Menu className={menuIcon} />
                    <X className={xIcon} />
                </button>
            </nav>

            <div
                className={`
                overflow-hidden
                transition-all duration-800 ease-in-out
                relative z-50
                ${menuAtivo ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
            `}>
                <div className="flex flex-col gap-4 px-4 pb-4">
                    <a href="#sobre" onClick={() => setMenuAtivo(false)}>Sobre</a>
                    <a href="#skills" onClick={() => setMenuAtivo(false)}>Habilidades</a>
                    <a href="#projetos" onClick={() => setMenuAtivo(false)}>Projetos</a>
                    <a href="#contato" onClick={() => setMenuAtivo(false)}>Contato</a>
                </div>
            </div>

        </header>
        {menuAtivo && (
        <div
            onClick={() => setMenuAtivo(false)}
            className={`fixed inset-0 bg-black/50 z-40
            transition-opacity duration-800
            ${menuAtivo ? "opacity-50" : "opacity-0 "}`}
        />)}
        </>
    )
}