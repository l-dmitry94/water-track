import { useState } from 'react';
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

interface IAddEditWater {
    time: string;
    volume: number;
}

const AddEditWater = ({ onClose }: { onClose: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const createWater = useWaters((state) => state.addWater);
    const error = useWaters((state) => state.error);
    const [volume, setVolume] = useState(50);

    const handleSubmit = async (data: IAddEditWater) => {
        const currentDate = new Date().toISOString();
        console.log(currentDate);
        setIsLoading(true);
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

                        <RecordingTime<IAddEditWater> register={register} errors={errors} />

                        <VolumeValue<IAddEditWater>
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
