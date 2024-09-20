import { yupResolver } from '@hookform/resolvers/yup';
import { ReactNode } from 'react';
import { FieldErrors, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import { ObjectSchema } from 'yup';

interface IForm<T extends FieldValues> {
    onSubmit: (data: T) => void;
    children: (register: UseFormRegister<T>, errors: FieldErrors<T>) => ReactNode;
    validationSchema: ObjectSchema<any>;
}

const Form = <T extends FieldValues>({ onSubmit, validationSchema, children }: IForm<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: yupResolver(validationSchema),
    });

    return <form onSubmit={handleSubmit(onSubmit)}>{children(register, errors)}</form>;
};

export default Form;
