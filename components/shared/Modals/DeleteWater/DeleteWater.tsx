import React, { FC, useState } from 'react';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';
import useWaters from '@/store/useWaters';
import WaterLoader from '@/components/ui/WaterLoader';
import { IAddEditDeleteWater } from '../AddEditWater';
import scss from './DeleteWater.module.scss';
import { format } from 'date-fns';

const DeleteWater: FC<IAddEditDeleteWater> = ({ water, currentDate, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const deleteWater = useWaters((state) => state.deleteWater);
    const getMonthlyWaters = useWaters((state) => state.getMonthlyWaters);
    const getWeeklyWaters = useWaters((state) => state.getWeeklyWaters);
    const error = useWaters((state) => state.error);

    const handleDeleteWater = async () => {
        if (water) {
            setIsLoading(true);
            await deleteWater(water.id!);
            setIsLoading(false);

            if (error) {
                toast.error(error);
                return;
            }

            onClose();

            await getMonthlyWaters(format(currentDate!, 'yyyy-MM-dd'));
            await getWeeklyWaters(format(currentDate!, 'yyyy-MM-dd'));

            toast.success('Water deleted successfully');
        }
    };

    return (
        <>
            <div className={scss.wrapper}>
                <p className={scss.text}>Are you sure you want to delete the entry?</p>

                <div className={scss.buttonsGroup}>
                    <Button onClick={handleDeleteWater} fullWidth>
                        Delete
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

export default DeleteWater;
