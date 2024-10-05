import clsx from 'clsx';
import scss from './Icon.module.scss';
import { FC } from 'react';

type IconVariant =
    | 'chevron-down'
    | 'close'
    | 'control-minus'
    | 'control-plus'
    | 'eye'
    | 'eye-off'
    | 'log-out'
    | 'pencil'
    | 'pie-chart'
    | 'plus'
    | 'settings'
    | 'trash'
    | 'upload'
    | 'user'
    | 'water-glass'
    | 'chevron-left'
    | 'chevron-right';

interface IIcon {
    variant: IconVariant;
    className?: string;
}

const Icon: FC<IIcon> = ({ variant, className }) => {
    return (
        <svg className={clsx(scss.icon, className)}>
            <use href={`/icons/icons.svg#icon-${variant}`}></use>
        </svg>
    );
};

export default Icon;
