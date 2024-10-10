import { ISignUpForm } from '@/components/shared/Auth/SignUpForm';
import { ISettings } from '@/components/shared/Modals/Settings';
import instance from './axios.config';
import ENDPOINTS from './endpoints';

export const signup = async (body: ISignUpForm) => {
    return await instance.post(ENDPOINTS.auth.signup, body);
};

export const updateUser = async (body: ISettings) => {
    return await instance.patch(ENDPOINTS.auth.update, body);
};
