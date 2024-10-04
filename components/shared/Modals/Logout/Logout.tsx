import { FC } from 'react';
import { signOut } from 'next-auth/react';
import Button from '@/components/ui/Button';
import { IAddEditDeleteWater } from '../AddEditWater';
import scss from './Logout.module.scss';

const Logout: FC<IAddEditDeleteWater> = ({ onClose }) => {
    return (
        <div className={scss.wrapper}>
            <p className={scss.text}>Do you really want to leave?</p>

            <div className={scss.buttonsGroup}>
                <Button onClick={() => signOut()} fullWidth>
                    Log out
                </Button>
                <Button onClick={onClose} className={scss.cancelButton} fullWidth>
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default Logout;
