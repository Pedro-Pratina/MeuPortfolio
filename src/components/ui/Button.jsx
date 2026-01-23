export function Button({children, onClick, addClasses }) {
    return (
        <button onClick={onClick} className={`border-(--cinzaClaro) border-1 rounded-md text-xl p-1.5 ${addClasses}`}>
            {children}
        </button>
    )
}