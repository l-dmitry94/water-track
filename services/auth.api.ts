import { ISignUpForm } from '@/components/shared/Auth/SignUpForm';
import instance from './axios.config';
import ENDPOINTS from './endpoints';

export const signup = async (body: ISignUpForm) => {
    return await instance.post(ENDPOINTS.auth.signup, body);
};
