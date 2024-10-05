'use client';

import { FC, useEffect, useState } from 'react';
import ScrollBar from '@/components/ui/ScrollBar';
import Modal from '@/components/ui/Modal';
import AddEditWater from '@/components/shared/Modals/AddEditWater';
import DeleteWater from '@/components/shared/Modals/DeleteWater';
import WaterItem from './WaterItem';
import useWaters from '@/store/useWaters';
import SkeletionWaterList from './SkeletionWaterList';
import { ITracker } from '../../../Tracker';
import { IWater } from '@/types/waters.types';
import scss from './WaterList.module.scss';

const WaterList: FC<ITracker> = ({ currentDate }) => {
    const [isEditModalIsOpen, setIsEditModalIsOpen] = useState(false);
    const [isDeleteModalIsOpen, setIsDeleteModalIsOpen] = useState(false);
    const [water, setWater] = useState<IWater | undefined>(undefined);
    const waters = useWaters((state) => state.waters);
    const isLoading = useWaters((state) => state.isLoading);
    const getDailyWaters = useWaters((state) => state.getDailyWaters);

    useEffect(() => {
        getDailyWaters(currentDate);
    }, [currentDate, getDailyWaters]);

    const handleEdit = (id: string) => {
        setIsEditModalIsOpen(!isEditModalIsOpen);
        setWater(waters.find((water) => water.id === id));
    };

    const handleDelete = (id: string) => {
        setIsDeleteModalIsOpen(!isDeleteModalIsOpen);
        setWater(waters.find((water) => water.id === id));
    };

    return (
        <>
            <section className={scss.waterSection}>
                {isLoading ? (
                    <div className={scss.skeleton}>
                        <SkeletionWaterList />
                    </div>
                ) : waters && waters.length > 0 ? (
                    <ScrollBar className={scss.scroll}>
                        <div className={scss.waterList}>
                            {waters?.map((water) => (
                                <WaterItem
                                    key={water.id}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                    {...water}
                                />
                            ))}
                        </div>
                    </ScrollBar>
                ) : (
                    <p className={scss.text}>
                        You haven&apos;t drunk any water today, so maybe it&apos;s time to fix that?
                    </p>
                )}
            </section>

            <Modal
                isOpen={isEditModalIsOpen}
                onClose={() => setIsEditModalIsOpen(false)}
                title="Edit the entered amount of water"
            >
                {water && (
                    <AddEditWater
                        water={water}
                        currentDate={currentDate}
                        onClose={() => setIsEditModalIsOpen(false)}
                    />
                )}
            </Modal>

            <Modal
                isOpen={isDeleteModalIsOpen}
                onClose={() => setIsDeleteModalIsOpen(false)}
                title="Delete entry"
                positionTitle="center"
            >
                {water && (
                    <DeleteWater
                        water={water}
                        currentDate={currentDate}
                        onClose={() => setIsDeleteModalIsOpen(false)}
                    />
                )}
            </Modal>
        </>
    );
};

export default WaterList;
