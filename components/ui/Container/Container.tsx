import { FC, ReactNode } from 'react';
import scss from './Container.module.scss';
import clsx from 'clsx';

interface IContainer {
    children: ReactNode;
    className?: string;
}

const Container: FC<IContainer> = ({ children, className }) => {
    return <div className={clsx(scss.container, className)}>{children}</div>;
};

export default Container;
