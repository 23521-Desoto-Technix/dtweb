import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, href }) => {
    const commonProps = {
        className: `transition ease-in-out hover:bg-white duration-200 text-white hover:text-zinc-900 border-2 border-white py-2 px-3 justify-self-end ${className}`,
    };

    if (href) {
        return (
            <a href={href} {...commonProps}>
                {text}
            </a>
        );
    }

    return (
        <button onClick={onClick} {...commonProps}>
            {text}
        </button>
    );
};

export default Button;