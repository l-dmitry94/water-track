import { FC, ReactNode } from 'react';
import SimpleBar from 'simplebar-react';
import clsx from 'clsx';
import 'simplebar-react/dist/simplebar.min.css';
import scss from './ScrollBar.module.scss';

interface IScrollBar {
    children: ReactNode;
    className?: string;
}

const ScrollBar: FC<IScrollBar> = ({ children, className }) => {
    return <SimpleBar className={clsx(scss.simpleBar, className)}>{children}</SimpleBar>;
};

export default ScrollBar;
