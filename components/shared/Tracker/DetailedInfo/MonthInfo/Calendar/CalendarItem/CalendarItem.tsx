import { FC } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import clsx from 'clsx';
import { ITracker } from '@/components/shared/Tracker/Tracker';
import scss from './CalendarItem.module.scss';

interface ICalendarItem extends ITracker {
    day: number;
    today: number;
    volume: number;
}

const CalendarItem: FC<ICalendarItem> = ({ day, today, volume, currentDate }) => {
    const { data: session } = useSession();
    const percent = Math.min((volume / session?.user?.volume) * 100, 100) || 0;

    const [year, month] = currentDate.split('-').slice(0, 2);

    const newDate = `${year}-${month}-${String(day).padStart(2, '0')}`;

    return (
        <div className={scss.calendarItem}>
            <Link
                href={`/tracker/${newDate}`}
                className={clsx(
                    scss.day,
                    percent === 100 && scss.full,
                    today === day && scss.today
                )}
            >
                {day}
            </Link>
            <p className={scss.percent}>{`${percent.toFixed(0)}%`}</p>
        </div>
    );
};

export default CalendarItem;
