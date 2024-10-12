import { FC, useState } from 'react';
import { signOut } from 'next-auth/react';
import Button from '@/components/ui/Button';
import WaterLoader from '@/components/ui/WaterLoader';
import { IAddEditDeleteWater } from '../AddEditWater';
import scss from './Logout.module.scss';

const Logout: FC<IAddEditDeleteWater> = ({ onClose }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);
        await signOut();
        setIsLoading(false);
    };
    return (
        <>
            <div className={scss.wrapper}>
                <p className={scss.text}>Do you really want to leave?</p>

                <div className={scss.buttonsGroup}>
                    <Button onClick={handleLogout} fullWidth>
                        Log out
                    </Button>
                    <Button onClick={onClose} className={scss.cancelButton} fullWidth>
                        Cancel
                    </Button>
                </div>
            </div>

            {isLoading && <WaterLoader />}
        </>
    );
};

export default Logout;
