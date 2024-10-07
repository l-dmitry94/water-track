import { FC, useEffect } from 'react';
import { format, getDaysInMonth } from 'date-fns';
import CalendarItem from './CalendarItem';
import useWaters from '@/store/useWaters';
import { IWater } from '@/types/waters.types';
import scss from './Calendar.module.scss';
import SkeletonCalendar from './SkeletonCalendar';

export interface ICalendar {
    currentDate: Date;
}

const Calendar: FC<ICalendar> = ({ currentDate }) => {
    const { monthlyWaters, getMonthlyWaters, isLoading } = useWaters();

    const daysInMonth = getDaysInMonth(currentDate);
    const today = new Date(currentDate).getDate();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    useEffect(() => {
        getMonthlyWaters(format(currentDate, 'yyyy-MM-dd'));
    }, [currentDate, getMonthlyWaters]);

    const waterPerDay: Record<number, number> = {};

    monthlyWaters.forEach((water: IWater) => {
        const waterDate = new Date(water.date!);
        const day = waterDate.getDate();

        if (!waterPerDay[day]) {
            waterPerDay[day] = 0;
        }

        waterPerDay[day] += water.volume;
    });

    if (isLoading) {
        return <SkeletonCalendar currentDate={currentDate} />;
    }

    return (
        <div className={scss.calendar}>
            {days.map((day) => (
                <CalendarItem
                    key={day}
                    day={day}
                    today={today}
                    currentDate={currentDate.toISOString()}
                    volume={waterPerDay[day] || 0}
                />
            ))}
        </div>
    );
};

export default Calendar;
