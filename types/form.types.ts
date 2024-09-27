import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IForm<T extends FieldValues> {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
}
