import { Dispatch, FC, SetStateAction } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import Icon from '@/components/ui/Icon';
import scss from './CalendarHeader.module.scss';
import Link from 'next/link';

interface ICalendarHeader {
    currentDate: Date;
    setDate: Dispatch<SetStateAction<Date>>;
    onShowStatistic: () => void;
    isShowStatistic: boolean;
}

const CalendarHeader: FC<ICalendarHeader> = ({
    currentDate,
    setDate,
    onShowStatistic,
    isShowStatistic,
}) => {
    const formattedDate = format(currentDate, 'MMMM, yyyy');

    const handleNextMonth = () => {
        setDate((prevDate) => addMonths(prevDate, 1));
    };

    const handlePrevMonth = () => {
        setDate((prevDate) => subMonths(prevDate, 1));
    };

    return (
        <section className={scss.calendarHeader}>
            <h2 className={scss.title}>{isShowStatistic ? 'Statistics' : 'Month'}</h2>

            <div className={scss.wrapper}>
                <Link href={`/tracker/${format(new Date(), 'yyyy-MM-dd')}`} className={scss.today}>
                    Today
                </Link>

                <div className={scss.date}>
                    <button className={scss.arrowButton} onClick={handlePrevMonth}>
                        <Icon variant="chevron-left" className={scss.arrowIcon} />
                    </button>
                    <p className={scss.dateText}>{formattedDate}</p>
                    <button className={scss.arrowButton} onClick={handleNextMonth}>
                        <Icon variant="chevron-right" className={scss.arrowIcon} />
                    </button>
                </div>

                <button onClick={onShowStatistic} className={scss.statisticButton}>
                    <Icon variant="pie-chart" className={scss.statisticIcon} />
                </button>
            </div>
        </section>
    );
};

export default CalendarHeader;
