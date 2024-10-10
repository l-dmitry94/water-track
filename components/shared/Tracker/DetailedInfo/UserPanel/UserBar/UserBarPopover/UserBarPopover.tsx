import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import Icon from '@/components/ui/Icon';
import scss from './UserBarPopover.module.scss';
import Modal from '@/components/ui/Modal';
import Logout from '@/components/shared/Modals/Logout';
import Settings from '@/components/shared/Modals/Settings';

interface IUserBarPopover {
    isOpen: boolean;
    onClose: () => void;
}
const UserBarPopover: FC<IUserBarPopover> = ({ isOpen, onClose }) => {
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

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
        <>
            <div className={clsx(scss.userBarPopover, isOpen && scss.open)}>
                <button onClick={() => setIsSettingsModalOpen(true)} className={scss.button}>
                    <Icon variant="settings" className={scss.popoverIcon} />
                    <p className={scss.popoverItemText}>Settings</p>
                </button>
                <button onClick={() => setIsLogoutModalOpen(true)} className={scss.button}>
                    <Icon variant="log-out" className={clsx(scss.popoverIcon, scss.logoutIcon)} />
                    <p className={clsx(scss.popoverItemText, scss.logoutText)}>Log out</p>
                </button>
            </div>

            <Modal
                isOpen={isLogoutModalOpen}
                onClose={() => setIsLogoutModalOpen(false)}
                title="Log out"
                positionTitle="center"
            >
                <Logout onClose={() => setIsLogoutModalOpen(false)} />
            </Modal>

            <Modal
                isOpen={isSettingsModalOpen}
                onClose={() => setIsSettingsModalOpen(false)}
                title="Settings"
                profile
            >
                <Settings onClose={() => setIsSettingsModalOpen(false)} />
            </Modal>
        </>
    );
};

export default UserBarPopover;
