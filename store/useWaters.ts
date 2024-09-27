import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import instance from '@/services/axios.config';
import ENDPOINTS from '@/services/endpoints';
import { createWater, getDailyWaters } from '@/services/waters.api';
import { IWater } from '@/types/waters.types';

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
    persist(
        (set) => ({
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
                    const response = await instance.get(
                        `${ENDPOINTS.waters.getWeeklyWaters}/${date}`
                    );
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
                    const response = await instance.get(
                        `${ENDPOINTS.waters.getMonthlyWaters}/${date}`
                    );
                    set({ waters: response.data });
                } catch (error: any) {
                    set({ error: error?.response?.data?.message || 'An error occurred' });
                } finally {
                    set({ isLoading: false });
                }
            },
        }),
        { name: 'waters', storage: createJSONStorage(() => localStorage) }
    )
);

export default useWaters;
