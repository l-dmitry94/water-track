import { create } from 'zustand';
import instance from '@/services/axios.config';
import ENDPOINTS from '@/services/endpoints';
import { createWater, getDailyWaters } from '@/services/waters.api';
import { IWater } from '@/types/waters.types';
import { devtools } from 'zustand/middleware';

interface IUseWaters {
    waters: IWater[];
    isLoading: boolean;
    addWater: (data: IWater) => Promise<void>;
    getDailyWaters: (date: string) => Promise<void>;
    getWeeklyWaters: (date: string) => Promise<void>;
    getMonthlyWaters: (date: string) => Promise<void>;
    error: string | null;
}

const useWaters = create<IUseWaters>()(
    devtools((set) => ({
        waters: [],
        isLoading: true,
        error: null,

        addWater: async (data) => {
            try {
                set({ isLoading: true, error: null });
                const response = await createWater(data);
                set((state) => ({ waters: [...state.waters, response.data] }));
            } catch (error: any) {
                set({ error: error?.response?.data?.message || 'An error occurred' });
            } finally {
                set({ isLoading: false });
            }
        },

        getDailyWaters: async (date) => {
            try {
                set({ isLoading: true, error: null });
                const response = await getDailyWaters(date);
                set({ waters: response.data });
            } catch (error: any) {
                set({ error: error?.response?.data?.message || 'An error occurred' });
            } finally {
                set({ isLoading: false });
            }
        },
        getWeeklyWaters: async (date) => {
            try {
                set({ isLoading: true, error: null });
                const response = await instance.get(`${ENDPOINTS.waters.getWeeklyWaters}/${date}`);
                set({ waters: response.data });
            } catch (error: any) {
                set({ error: error?.response?.data?.message || 'An error occurred' });
            } finally {
                set({ isLoading: false });
            }
        },
        getMonthlyWaters: async (date) => {
            try {
                set({ isLoading: true, error: null });
                const response = await instance.get(`${ENDPOINTS.waters.getMonthlyWaters}/${date}`);
                set({ waters: response.data });
            } catch (error: any) {
                set({ error: error?.response?.data?.message || 'An error occurred' });
            } finally {
                set({ isLoading: false });
            }
        },
    }))
);

export default useWaters;
