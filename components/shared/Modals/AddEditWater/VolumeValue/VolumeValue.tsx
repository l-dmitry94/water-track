import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';
import Input from '@/components/ui/Input';
import { IForm } from '@/types/form.types';
import scss from './VolumeValue.module.scss';

interface IVolumeValue<T extends FieldValues> extends IForm<T> {
    volume: number;
    setVolume: Dispatch<SetStateAction<number>>;
    setValue: UseFormSetValue<T>;
}

const VolumeValue = <T extends FieldValues>({
    register,
    errors,
    volume,
    setVolume,
    setValue,
}: IVolumeValue<T>) => {
    useEffect(() => {
        setValue('volume' as Path<T>, volume as PathValue<T, Path<T>>);
    }, [volume, setValue, setVolume]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value));
    };

    return (
        <div className={scss.volumeValue}>
            <Input<T>
                type="number"
                label="Enter the value of the water used:"
                name={'volume' as Path<T>}
                register={register}
                errors={errors}
                value={volume}
                onChange={handleChange}
            />
        </div>
    );
};

export default VolumeValue;
