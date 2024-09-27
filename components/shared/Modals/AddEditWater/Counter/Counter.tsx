import Icon from '@/components/ui/Icon';
import scss from './Counter.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';

interface ICounter<T extends FieldValues> {
    volume: number;
    setVolume: Dispatch<SetStateAction<number>>;
    setValue: UseFormSetValue<T>;
}

const Counter = <T extends FieldValues>({ volume, setVolume, setValue }: ICounter<T>) => {
    const handleIncrement = () => {
        setValue('volume' as Path<T>, volume as PathValue<T, Path<T>>);
        setVolume((prevVolume) => Math.floor(prevVolume / 50) * 50 + 50);
    };

    const handleDecrement = () => {
        if (volume <= 50) return;

        setValue('volume' as Path<T>, volume as PathValue<T, Path<T>>);
        setVolume((prevVolume) => Math.floor(prevVolume / 50) * 50 - 50);
    };
    return (
        <div className={scss.counter}>
            <p className={scss.text}>Amount of water:</p>

            <div className={scss.controls}>
                <button onClick={handleDecrement} type="button" className={scss.controlButton}>
                    <Icon variant="control-minus" className={scss.controlIcon} />
                </button>
                <p className={scss.volume}>{`${volume} ml`}</p>
                <button onClick={handleIncrement} type="button" className={scss.controlButton}>
                    <Icon variant="control-plus" className={scss.controlIcon} />
                </button>
            </div>
        </div>
    );
};

export default Counter;
