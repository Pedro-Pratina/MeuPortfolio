export function IconLink({ href, icon: Icon, label, className }) {
    return (
        <a href={href} aria-label={label}>
            <Icon className={className} />
        </a>
    );
}