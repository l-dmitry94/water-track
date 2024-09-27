import { IWater } from '@/types/waters.types';
import instance from './axios.config';
import ENDPOINTS from './endpoints';

export const createWater = async (body: IWater) => {
    return await instance.post(ENDPOINTS.waters.create, body);
};

export const getDailyWaters = async (date: string) => {
    return await instance.get(`${ENDPOINTS.waters.getDailyWaters}/${date}`);
};
