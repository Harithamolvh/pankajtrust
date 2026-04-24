export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-black/20 text-saffron shadow-sm focus:ring-saffron bg-white/80 transition-colors ' +
                className
            }
        />
    );
}
