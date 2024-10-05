export interface IWater {
    id?: string;
    volume: number;
    time: string;
    date?: string;
}

export interface IUseWaters {
    waters: IWater[];
    monthlyWaters: IWater[];
    isLoading: boolean;
    addWater: (data: IWater) => Promise<void>;
    updateWater: (data: IWater, id: string) => Promise<void>;
    deleteWater: (id: string) => Promise<void>;
    getDailyWaters: (date: string) => Promise<void>;
    // getWeeklyWaters: (date: string) => Promise<void>;
    getMonthlyWaters: (date: string) => Promise<void>;
    error: string | null;
}
