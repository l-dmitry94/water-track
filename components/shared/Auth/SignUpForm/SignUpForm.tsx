'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Path } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import WaterLoader from '@/components/ui/WaterLoader';
import Auth from '../Auth';
import signUpFields from './signUpFields';
import signUpValidationSchema from './signUpValidationSchema';
import { signup } from '@/services/auth.api';
import scss from './SignUpForm.module.scss';

export interface ISignUpForm {
    email: string;
    password: string;
    repeatPassword?: string;
}

const SignUpForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (data: ISignUpForm) => {
        try {
            setIsLoading(true);
            const response = await signup({ email: data.email, password: data.password });

            if (response.status === 201) {
                const response = await signIn('credentials', { ...data, redirect: false });

                if (response?.error) {
                    toast.error(response.error);
                    setIsLoading(false);
                    return;
                }

                router.replace('/tracker');
                toast.success('Welcome to your tracker!');
                setIsLoading(false);
            }
        } catch (error: any) {
            setIsLoading(false);
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
            <Auth title="Sign Up">
                <Form<ISignUpForm>
                    onSubmit={handleSubmit}
                    validationSchema={signUpValidationSchema}
                >
                    {(register, errors) => (
                        <div className={scss.wrapper}>
                            <div className={scss.inputsWrapper}>
                                {signUpFields.map((field) => (
                                    <Input<ISignUpForm>
                                        key={field.name}
                                        {...field}
                                        name={field.name as Path<ISignUpForm>}
                                        register={register}
                                        errors={errors}
                                    />
                                ))}
                            </div>

                            <Button fullWidth type="submit">
                                Sign Up
                            </Button>

                            <p className={scss.text}>
                                Already have account?{' '}
                                <Link href="/signin" className={scss.link}>
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    )}
                </Form>
            </Auth>

            {isLoading && <WaterLoader />}
        </>
    );
};

export default SignUpForm;
