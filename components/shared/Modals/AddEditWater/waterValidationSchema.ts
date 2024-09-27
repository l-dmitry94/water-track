import * as yup from 'yup';

export const waterValidationSchema = yup.object({
    volume: yup.number().required('Volume is required').min(50, 'Volume cannot be less than 50 ml'),
    time: yup.string().required('Time is required'),
});
