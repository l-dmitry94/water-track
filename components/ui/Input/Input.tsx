import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';
import Icon from '../Icon';
import scss from './Input.module.scss';

interface IInput<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
    type: HTMLInputTypeAttribute;
    register: UseFormRegister<T>;
    name: Path<T>;
    errors: FieldErrors<T>;
    label: string;
    className?: string;
}

const Input = <T extends FieldValues>({
    register,
    name,
    label,
    type,
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
            <label htmlFor={name} className={scss.label}>
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
