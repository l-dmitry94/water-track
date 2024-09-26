import instance from '@/services/axios.config';
import ENDPOINTS from '@/services/endpoints';
import { getDailyWaters } from '@/services/waters.api';
import { IWater } from '@/types/waters.types';
import { create } from 'zustand';

interface IUseWaters {
    waters: IWater[];
    isLoading: boolean;
    addWater: (data: IWater) => Promise<void>;
    getDailyWaters: (date: string) => Promise<void>;
    getWeeklyWaters: (date: string) => Promise<void>;
    getMonthlyWaters: (date: string) => Promise<void>;
}

const useWaters = create<IUseWaters>((set) => ({
    waters: [],
    isLoading: false,

    addWater: async (data) => {
        set({ isLoading: true });
        const response = await instance.post(ENDPOINTS.waters.create, data);
        set((state) => ({ waters: [...state.waters, response.data], isLoading: false }));
    },

    getDailyWaters: async (date) => {
        set({ isLoading: true });
        const response = await getDailyWaters(date);
        set({ waters: response.data, isLoading: false });
    },
    getWeeklyWaters: async (date) => {
        set({ isLoading: true });
        const response = await instance.get(`${ENDPOINTS.waters.getWeeklyWaters}/${date}`);
        set({ waters: response.data, isLoading: false });
    },
    getMonthlyWaters: async (date) => {
        set({ isLoading: true });
        const response = await instance.get(`${ENDPOINTS.waters.getMonthlyWaters}/${date}`);
        set({ waters: response.data, isLoading: false });
    },
}));

export default useWaters;
