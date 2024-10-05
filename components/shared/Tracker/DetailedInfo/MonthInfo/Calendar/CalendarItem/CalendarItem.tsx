import { FC } from 'react';
import clsx from 'clsx';
import scss from './CalendarItem.module.scss';
import { useSession } from 'next-auth/react';

interface ICalendarItem {
    day: number;
    today: number;
    volume: number;
}

const CalendarItem: FC<ICalendarItem> = ({ day, today, volume }) => {
    const { data: session } = useSession();
    const percent = Math.min((volume / session?.user?.volume) * 100, 100) || 0;

    return (
        <div className={scss.calendarItem}>
            <div
                className={clsx(
                    scss.day,
                    percent === 100 && scss.full,
                    today === day && scss.today
                )}
            >
                {day}
            </div>
            <p className={scss.percent}>{`${percent.toFixed(0)}%`}</p>
        </div>
    );
};

export default CalendarItem;
