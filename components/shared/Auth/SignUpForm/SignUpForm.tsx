'use client';

import { Path } from 'react-hook-form';
import Link from 'next/link';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Auth from '../Auth';
import signUpFields from './signUpFields';
import signUpValidationSchema from './signUpValidationSchema';
import scss from './SignUpForm.module.scss';

interface ISignUpForm {
    email: string;
    password: string;
    repeatPassword: string;
}

const SignUpForm = () => {
    const handleSubmit = (data: ISignUpForm) => {
        console.log(data);
    };

    return (
        <Auth title="Sign Up">
            <Form<ISignUpForm> onSubmit={handleSubmit} validationSchema={signUpValidationSchema}>
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
    );
};

export default SignUpForm;
