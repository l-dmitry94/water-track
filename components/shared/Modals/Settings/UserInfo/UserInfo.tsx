import { Dispatch, SetStateAction } from 'react';
import {
    FieldErrors,
    FieldValues,
    Path,
    PathValue,
    UseFormRegister,
    UseFormSetValue,
} from 'react-hook-form';
import Input from '@/components/ui/Input';
import userInfoFields from './userInfoFields';
import { ISession } from '@/types/session.types';
import scss from './UserInfo.module.scss';

export interface IUserInfo<T extends FieldValues> extends ISession {
    weight?: number;
    activeTime?: number;
    gender?: 'woman' | 'man';
    setWeight?: Dispatch<SetStateAction<number | undefined>>;
    setActiveTime?: Dispatch<SetStateAction<number | undefined>>;
    register: UseFormRegister<T>;
    setValue: UseFormSetValue<T>;
    errors: FieldErrors<T>;
}
const UserInfo = <T extends FieldValues>({ session, register, setValue, errors }: IUserInfo<T>) => {
    return (
        <div className={scss.wrapper}>
            {userInfoFields.map(({ name, label, type, placeholder }) => (
                <Input
                    key={name}
                    type={type}
                    label={label}
                    name={name as Path<T>}
                    register={register}
                    defaultValue={session?.user?.[name]}
                    onChange={(e) =>
                        setValue(name as Path<T>, e.target.value as PathValue<T, Path<T>>)
                    }
                    errors={errors}
                    placeholder={placeholder}
                />
            ))}
        </div>
    );
};

export default UserInfo;
