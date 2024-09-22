import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import scss from './Logo.module.scss';

interface ILogo {
    children: ReactNode;
    variant?: 'gray' | 'green';
    fullHeight?: boolean;
    className?: string;
}

const Logo: FC<ILogo> = ({ children, fullHeight, variant = 'gray', className }) => {
    return (
        <section
            className={clsx(scss.logo, scss[variant], fullHeight && scss.fullHeight, className)}
        >
            <p className={scss.logoText}>WaterTrack</p>
            {children}
        </section>
    );
};

export default Logo;
