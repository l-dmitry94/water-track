'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Path } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Auth from '../Auth';
import signInFields from './signInFields';
import signInValidationSchema from './signInValidationSchema';
import scss from './SignInForm.module.scss';
import WaterLoader from '@/components/ui/WaterLoader';
import toast from 'react-hot-toast';

export interface ISignInForm {
    email: string;
    password: string;
}

const SignInForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (data: ISignInForm) => {
        setIsLoading(true);
        const response = await signIn('credentials', { ...data, redirect: false });

        if (response?.error) {
            toast.error(response.error);
            setIsLoading(false);
            return;
        }

        router.replace('/tracker');
        toast.success('Welcome to your tracker!');
        setIsLoading(false);
    };

    return (
        <>
            <Auth title="Sign In">
                <Form<ISignInForm>
                    onSubmit={handleSubmit}
                    validationSchema={signInValidationSchema}
                >
                    {(register, errors) => (
                        <div className={scss.wrapper}>
                            <div className={scss.inputsWrapper}>
                                {signInFields.map((field) => (
                                    <Input<ISignInForm>
                                        key={field.name}
                                        {...field}
                                        name={field.name as Path<ISignInForm>}
                                        register={register}
                                        errors={errors}
                                    />
                                ))}
                            </div>

                            <Button fullWidth type="submit">
                                Sign In
                            </Button>

                            <p className={scss.text}>
                                Don&apos;t have an account?{' '}
                                <Link href="/signup" className={scss.link}>
                                    Sign Up
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

export default SignInForm;
