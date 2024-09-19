import { FC, ReactNode } from 'react';
import scss from './Container.module.scss';

interface IContainer {
    children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
    return <div className={scss.container}>{children}</div>;
};

export default Container;
