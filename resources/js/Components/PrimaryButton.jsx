export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-lg border border-transparent bg-saffron px-4 py-3 text-sm font-bold tracking-widest text-white transition-all duration-300 ease-in-out hover:bg-forest focus:bg-forest focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2 active:scale-[0.98] ${
                    disabled && 'opacity-50 cursor-not-allowed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
