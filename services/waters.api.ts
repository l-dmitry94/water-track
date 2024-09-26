import instance from './axios.config';
import ENDPOINTS from './endpoints';

export const getDailyWaters = async (date: string) => {
    return await instance.get(`${ENDPOINTS.waters.getDailyWaters}/${date}`);
};
