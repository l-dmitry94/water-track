import { FieldValues, Path } from 'react-hook-form';
import { format } from 'date-fns';
import Input from '@/components/ui/Input';
import { IForm } from '@/types/form.types';
import scss from './RecordingTime.module.scss';

interface RecordingTimeProps<T extends FieldValues> extends IForm<T> {
    oldTime?: string;
}

const RecordingTime = <T extends FieldValues>({
    register,
    errors,
    oldTime,
}: RecordingTimeProps<T>) => {
    const currentTime = oldTime || format(new Date(), 'HH:mm');

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
