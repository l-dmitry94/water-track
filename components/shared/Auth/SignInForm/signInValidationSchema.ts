import * as yup from 'yup';

const signInValidationSchema = yup.object({
    email: yup
        .string()
        .required('Email is required')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address'),
    password: yup
        .string()
        .required('Password is required')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password is too weak'),
});

export default signInValidationSchema;
