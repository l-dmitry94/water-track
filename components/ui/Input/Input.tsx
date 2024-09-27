import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react';
import { FieldValues, Path, UseFormSetValue } from 'react-hook-form';
import clsx from 'clsx';
import Icon from '../Icon';
import { IForm } from '@/types/form.types';
import scss from './Input.module.scss';

interface IInput<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>,
        IForm<T> {
    type: HTMLInputTypeAttribute;
    name: Path<T>;
    label: string;
    light?: boolean;
    className?: string;
    setValue?: UseFormSetValue<T>;
}

const Input = <T extends FieldValues>({
    register,
    name,
    label,
    type,
    light,
    className,
    errors,
    ...props
}: IInput<T>) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };
    return (
        <div className={scss.wrapper}>
            <label htmlFor={name} className={clsx(scss.label, light && scss.lightLabel)}>
                {label}
            </label>
            <div className={scss.inputWrapper}>
                <input
                    type={isShowPassword ? 'text' : type}
                    autoComplete="off"
                    id={name}
                    className={clsx(scss.input, errors[name] && scss.errorInput, className)}
                    {...register(name)}
                    {...props}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={toggleShowPassword}
                        className={scss.passwordButton}
                    >
                        <Icon
                            variant={isShowPassword ? 'eye-off' : 'eye'}
                            className={scss.passwordIcon}
                        />
                    </button>
                )}
            </div>
            {errors[name] && <p className={scss.error}>{errors[name].message as string}</p>}
        </div>
    );
};

export default Input;
