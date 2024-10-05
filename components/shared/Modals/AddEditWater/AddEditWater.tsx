import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import Form from '@/components/ui/Form';
import Button from '@/components/ui/Button';
import Counter from './Counter';
import RecordingTime from './RecordingTime';
import { waterValidationSchema } from './waterValidationSchema';
import VolumeValue from './VolumeValue';
import useWaters from '@/store/useWaters';
import WaterLoader from '@/components/ui/WaterLoader';
import scss from './AddEditWater.module.scss';
import { IWater } from '@/types/waters.types';

interface IAddEditWaterData {
    time: string;
    volume: number;
}

export interface IAddEditDeleteWater {
    onClose: () => void;
    water?: IWater;
    currentDate?: string;
}

const AddEditWater: FC<IAddEditDeleteWater> = ({ onClose, water, currentDate }) => {
    const [isLoading, setIsLoading] = useState(false);
    const createWater = useWaters((state) => state.addWater);
    const updateWater = useWaters((state) => state.updateWater);
    const error = useWaters((state) => state.error);
    const [volume, setVolume] = useState(water?.volume || 50);

    const handleSubmit = async (data: IAddEditWaterData) => {
        setIsLoading(true);
        if (water) {
            await updateWater({ ...data }, water.id!);
            setIsLoading(false);
            toast.success('Water updated successfully');
            onClose();
            return;
        }
        await createWater({ ...data, date: currentDate });
        setIsLoading(false);

        if (error) {
            toast.error(error);
            return;
        }

        toast.success('Water added successfully');
        onClose();
    };
    return (
        <div className={scss.modal}>
            <Form onSubmit={handleSubmit} validationSchema={waterValidationSchema}>
                {(register, errors, setValue) => (
                    <div className={scss.wrapper}>
                        <h3 className={scss.title}>Choose a value</h3>

                        <Counter volume={volume} setVolume={setVolume} setValue={setValue} />

                        <RecordingTime<IAddEditWaterData>
                            register={register}
                            errors={errors}
                            oldTime={water?.time}
                        />

                        <VolumeValue<IAddEditWaterData>
                            register={register}
                            errors={errors}
                            volume={volume}
                            setValue={setValue}
                            setVolume={setVolume}
                        />

                        <Button type="submit" variant="contained">
                            Save
                        </Button>
                    </div>
                )}
            </Form>

            {isLoading && <WaterLoader />}
        </div>
    );
};

export default AddEditWater;
