'use client';

import { FC, ReactNode } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import scss from './ScrollBar.module.scss';
import clsx from 'clsx';

interface IScrollBar {
    children: ReactNode;
    className?: string;
}

const ScrollBar: FC<IScrollBar> = ({ children, className }) => {
    return <SimpleBar className={clsx(scss.simpleBar, className)}>{children}</SimpleBar>;
};

export default ScrollBar;
