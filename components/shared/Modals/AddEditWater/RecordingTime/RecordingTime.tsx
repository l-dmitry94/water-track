import { FieldValues, Path } from 'react-hook-form';
import { format } from 'date-fns';
import Input from '@/components/ui/Input';
import { IForm } from '@/types/form.types';
import scss from './RecordingTime.module.scss';

const RecordingTime = <T extends FieldValues>({ register, errors }: IForm<T>) => {
    const currentTime = format(new Date(), 'HH:mm');

    return (
        <div className={scss.recordingTimeWrapper}>
            <Input<T>
                type="time"
                label="Recording time:"
                name={'time' as Path<T>}
                register={register}
                light
                errors={errors}
                defaultValue={currentTime}
                className={scss.recordingTime}
            />
        </div>
    );
};

export default RecordingTime;
