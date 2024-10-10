import { FieldValues, Path, PathValue } from 'react-hook-form';
import { IUserInfo } from '../UserInfo';
import additionalInfoFields from './additionalInfoFields';
import Input from '@/components/ui/Input';
import scss from './AdditionalInfo.module.scss';

const AdditionalInfo = <T extends FieldValues>({
    setValue,
    errors,
    register,
    weight,
    activeTime,
    setWeight,
    setActiveTime,
}: IUserInfo<T>) => {
    return (
        <div className={scss.wrapper}>
            {additionalInfoFields.map(({ name, label, type, placeholder }) => (
                <Input<T>
                    key={name}
                    type={type}
                    label={label}
                    name={name as Path<T>}
                    register={register}
                    light
                    defaultValue={name === 'weight' ? weight : activeTime}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        if (name === 'weight') {
                            if (setWeight) {
                                setWeight(value);
                            }
                        } else if (name === 'activeTime') {
                            {
                                if (setActiveTime) {
                                    setActiveTime(value);
                                }
                            }
                        }
                        setValue(name as Path<T>, value as PathValue<T, Path<T>>);
                    }}
                    errors={errors}
                    placeholder={placeholder}
                />
            ))}
        </div>
    );
};

export default AdditionalInfo;
