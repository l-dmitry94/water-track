import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
    createWater,
    deleteWater,
    getDailyWaters,
    getMonthlyWaters,
    getWeeklyWaters,
    updateWater,
} from '@/services/waters.api';
import { IUseWaters } from '@/types/waters.types';

const useWaters = create<IUseWaters>()(
    devtools((set) => ({
        waters: [],
        weeklyWaters: [],
        monthlyWaters: [],
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

        updateWater: async (data, id) => {
            try {
                set({ isLoading: true, error: null });
                const response = await updateWater(data, id);
                set((state) => ({
                    waters: state.waters.map((water) => (water.id === id ? response.data : water)),
                }));
            } catch (error: any) {
                set({ error: error?.response?.data?.message || 'An error occurred' });
            } finally {
                set({ isLoading: false });
            }
        },

        deleteWater: async (id) => {
            try {
                set({ isLoading: true, error: null });
                await deleteWater(id);
                set((state) => ({ waters: state.waters.filter((water) => water.id !== id) }));
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
                const response = await getWeeklyWaters(date);
                set({ weeklyWaters: response.data });
            } catch (error: any) {
                set({ error: error?.response?.data?.message || 'An error occurred' });
            } finally {
                set({ isLoading: false });
            }
        },
        getMonthlyWaters: async (date) => {
            try {
                set({ isLoading: true, error: null });
                const response = await getMonthlyWaters(date);
                set({ monthlyWaters: response.data });
            } catch (error: any) {
                set({ error: error?.response?.data?.message || 'An error occurred' });
            } finally {
                set({ isLoading: false });
            }
        },
    }))
);

export default useWaters;
