'use client';

import { FC, useState } from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Modal from '@/components/ui/Modal';
import AddEditWater from '@/components/shared/Modals/AddEditWater';
import { ITracker } from '../../../Tracker';
import scss from './AddWaterBtn.module.scss';

const AddWaterBtn: FC<ITracker> = ({ currentDate }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => setModalIsOpen(!modalIsOpen);

    return (
        <>
            <Button variant="text" onClick={toggleModal} className={scss.button}>
                <div className={scss.iconWrapper}>
                    <Icon variant="plus" className={scss.iconPlus} />
                </div>
                Add water
            </Button>

            <Modal isOpen={modalIsOpen} onClose={toggleModal} title="Add water">
                <AddEditWater currentDate={currentDate} onClose={toggleModal} />
            </Modal>
        </>
    );
};

export default AddWaterBtn;
