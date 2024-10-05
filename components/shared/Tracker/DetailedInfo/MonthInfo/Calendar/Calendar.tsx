import { FC, useEffect } from 'react';
import { getDaysInMonth } from 'date-fns';
import CalendarItem from './CalendarItem';
import useWaters from '@/store/useWaters';
import { ITracker } from '../../../Tracker';
import { IWater } from '@/types/waters.types';
import scss from './Calendar.module.scss';

const Calendar: FC<ITracker> = ({ currentDate }) => {
    const getMonthlyWaters = useWaters((state) => state.getMonthlyWaters);
    const monthlyWaters = useWaters((state) => state.monthlyWaters);
    const waters = useWaters((state) => state.waters);

    const daysInMonth = getDaysInMonth(new Date(currentDate));
    const today = new Date(currentDate).getDate();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    useEffect(() => {
        if (waters.length > 0 || monthlyWaters.length === 0) {
            getMonthlyWaters(currentDate);
        }
    }, [waters, currentDate, getMonthlyWaters, monthlyWaters.length]);

    const waterPerDay: Record<number, number> = {};

    monthlyWaters.forEach((water: IWater) => {
        const waterDate = new Date(water.date!);
        const day = waterDate.getDate();

        if (!waterPerDay[day]) {
            waterPerDay[day] = 0;
        }

        waterPerDay[day] += water.volume;
    });

    return (
        <div className={scss.calendar}>
            {days.map((day) => (
                <CalendarItem key={day} day={day} today={today} volume={waterPerDay[day] || 0} />
            ))}
        </div>
    );
};

export default Calendar;
