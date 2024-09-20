import * as yup from 'yup';

const signUpValidationSchema = yup.object({
    email: yup
        .string()
        .required('Email is required')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address'),
    password: yup
        .string()
        .required('Password is required')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password is too weak'),
    repeatPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
});

export default signUpValidationSchema;
