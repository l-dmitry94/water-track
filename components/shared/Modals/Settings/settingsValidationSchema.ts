import * as yup from 'yup';

const settingsValidationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Email is required'),
    image: yup.string().url(),
    gender: yup.mixed().oneOf(['woman', 'man']),
    weight: yup
        .number()
        .min(0, 'Weight cannot be less than 0 kg')
        .max(500, 'Weight cannot be more than 500 kg'),
    activeTime: yup
        .number()
        .typeError('Active time must be a number')
        .min(0, 'Active time cannot be less than 0 min')
        .max(1440, 'Active time cannot be more than 1440 min'),
    volume: yup
        .number()
        .typeError('Volume must be a number')
        .min(0, 'Volume cannot be less than 0 L'),
});

export default settingsValidationSchema;
