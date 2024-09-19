import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import scss from './Logo.module.scss';

interface ILogo {
    children: ReactNode;
    variant?: 'gray' | 'green';
}

const Logo: FC<ILogo> = ({ children, variant = 'gray' }) => {
    return (
        <section className={clsx(scss.logo, scss[variant])}>
            <p className={scss.logoText}>WaterTrack</p>
            {children}
        </section>
    );
};

export default Logo;
