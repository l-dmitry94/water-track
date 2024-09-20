import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import scss from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: 'button' | 'submit' | 'reset';
    variant?: 'contained' | 'outlined' | 'text';
    href?: string;
    fullWidth?: boolean;
    className?: string;
}

const Button: FC<IButton> = ({
    children,
    variant = 'contained',
    href,
    fullWidth,
    className,
    ...props
}) => {
    if (href) {
        return (
            <Link
                href={href}
                className={clsx(scss.button, scss[variant], fullWidth && scss.fullWidth, className)}
            >
                {children}
            </Link>
        );
    }
    return (
        <button
            className={clsx(scss.button, scss[variant], fullWidth && scss.fullWidth)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
