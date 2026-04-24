export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-sans font-bold text-charcoal ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
