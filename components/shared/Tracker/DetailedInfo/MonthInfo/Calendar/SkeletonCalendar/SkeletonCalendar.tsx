import { FC } from 'react';
import { getDaysInMonth } from 'date-fns';
import Skeleton from 'react-loading-skeleton';
import { ICalendar } from '../Calendar';
import scss from './SkeletonCalendar.module.scss';

const SkeletonCalendar: FC<ICalendar> = ({ currentDate }) => {
    const daysInMonth = getDaysInMonth(currentDate);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
        <div className={scss.calendar}>
            {days.map((day) => (
                <div key={day} className={scss.calendarItem}>
                    <Skeleton circle className={scss.day} />
                    <Skeleton containerClassName={scss.percent} />
                </div>
            ))}
        </div>
    );
};

export default SkeletonCalendar;
