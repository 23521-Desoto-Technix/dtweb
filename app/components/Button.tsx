import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    href?: string;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, href, children }) => {
    const commonProps = {
        className: `transition ease-in-out hover:bg-white duration-200 text-white hover:text-zinc-900 border-2 border-white py-2 px-3 justify-self-end ${className}`,
    };

    if (href) {
        return (
            <a href={href} {...commonProps}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} {...commonProps}>
            {children}
        </button>
    );
};

export default Button;