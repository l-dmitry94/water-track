import { IWater } from '@/types/waters.types';
import instance from './axios.config';
import ENDPOINTS from './endpoints';

export const createWater = async (body: IWater) => {
    return await instance.post(ENDPOINTS.waters.create, body);
};

export const updateWater = async (body: IWater, id: string) => {
    return await instance.put(`${ENDPOINTS.waters.update}/${id}`, body);
};

export const deleteWater = async (id: string) => {
    return await instance.delete(`${ENDPOINTS.waters.delete}/${id}`);
};

export const getDailyWaters = async (date: string) => {
    return await instance.get(`${ENDPOINTS.waters.daily}/${date}`);
};

export const getWeeklyWaters = async (date: string) => {
    return await instance.get(`${ENDPOINTS.waters.weekly}/${date}`);
};

export const getMonthlyWaters = async (date: string) => {
    return await instance.get(`${ENDPOINTS.waters.monthly}/${date}`);
};
