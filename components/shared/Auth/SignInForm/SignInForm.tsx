'use client';

import { Path } from 'react-hook-form';
import Link from 'next/link';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Auth from '../Auth';
import scss from './SignInForm.module.scss';
import signInFields from './signInFields';
import signInValidationSchema from './signInValidationSchema';

interface ISignInForm {
    email: string;
    password: string;
}

const SignInForm = () => {
    const handleSubmit = (data: ISignInForm) => {
        console.log(data);
    };

    return (
        <Auth title="Sign In">
            <Form<ISignInForm> onSubmit={handleSubmit} validationSchema={signInValidationSchema}>
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
    );
};

export default SignInForm;
