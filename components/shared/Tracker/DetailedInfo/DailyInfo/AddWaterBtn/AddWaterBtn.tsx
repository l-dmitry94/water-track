'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Modal from '@/components/ui/Modal';
import scss from './AddWaterBtn.module.scss';
import AddEditWater from '@/components/shared/Modals/AddEditWater';

const AddWaterBtn = () => {
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
                <AddEditWater onClose={toggleModal} />
            </Modal>
        </>
    );
};

export default AddWaterBtn;
