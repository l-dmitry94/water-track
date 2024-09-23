import { FC, useEffect } from 'react';
import clsx from 'clsx';
import Icon from '@/components/ui/Icon';
import scss from './UserBarPopover.module.scss';

interface IUserBarPopover {
    isOpen: boolean;
    onClose: () => void;
}
const UserBarPopover: FC<IUserBarPopover> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleClickByOutside = (event: MouseEvent) => {
            if (event.target && !(event.target as HTMLElement).closest(`.${scss.userBarPopover}`)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickByOutside);
        } else {
            document.removeEventListener('click', handleClickByOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickByOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div className={clsx(scss.userBarPopover, isOpen && scss.open)}>
            <button className={scss.button}>
                <Icon variant="settings" className={scss.popoverIcon} />
                <p className={scss.popoverItemText}>Settings</p>
            </button>
            <button className={scss.button}>
                <Icon variant="log-out" className={clsx(scss.popoverIcon, scss.logoutIcon)} />
                <p className={clsx(scss.popoverItemText, scss.logoutText)}>Log out</p>
            </button>
        </div>
    );
};

export default UserBarPopover;
