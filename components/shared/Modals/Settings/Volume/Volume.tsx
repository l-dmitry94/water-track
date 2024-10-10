import { FieldValues, Path, PathValue } from 'react-hook-form';
import { IUserInfo } from '../UserInfo';
import Input from '@/components/ui/Input';
import dailyNorma from '@/helpers/dailyNorma';
import scss from './Volume.module.scss';

const Volume = <T extends FieldValues>({
    weight,
    activeTime,
    gender,
    session,
    register,
    setValue,
    errors,
}: IUserInfo<T>) => {
    const norma = dailyNorma(session?.user?.volume, gender, activeTime, weight);

    const handleNormaClick = () => {
        if (norma) {
            setValue('volume' as Path<T>, norma as PathValue<T, Path<T>>);
        }
    };

    return (
        <div className={scss.volume}>
            <div className={scss.info}>
                <p className={scss.text}>The required amount of water in liters per day:</p>
                <p className={scss.value} onClick={handleNormaClick}>
                    {norma}
                </p>
            </div>

            <Input<T>
                register={register}
                name={'volume' as Path<T>}
                defaultValue={session?.user?.volume / 1000} // Початкове значення
                onChange={(e) =>
                    setValue('volume' as Path<T>, e.target.value as PathValue<T, Path<T>>)
                }
                label="Write down how much water you will drink:"
                type="text"
                errors={errors}
            />
        </div>
    );
};

export default Volume;
