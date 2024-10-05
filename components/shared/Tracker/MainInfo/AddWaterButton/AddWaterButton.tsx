'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import scss from './AddWaterButton.module.scss';
import Modal from '@/components/ui/Modal';
import AddEditWater from '@/components/shared/Modals/AddEditWater';

const AddWaterButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={scss.buttonWrapper}>
            <Button
                variant="contained"
                onClick={() => setIsModalOpen(true)}
                className={scss.button}
            >
                <Icon variant="plus" className={scss.icon} />
                Add water
            </Button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add water">
                <AddEditWater onClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default AddWaterButton;
