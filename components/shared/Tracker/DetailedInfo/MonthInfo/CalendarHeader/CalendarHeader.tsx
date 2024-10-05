import { Dispatch, FC, SetStateAction } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import Icon from '@/components/ui/Icon';
import scss from './CalendarHeader.module.scss';

interface ICalendarHeader {
    currentDate: Date;
    setDate: Dispatch<SetStateAction<Date>>;
}

const CalendarHeader: FC<ICalendarHeader> = ({ currentDate, setDate }) => {
    const formattedDate = format(currentDate, 'MMMM, yyyy');

    const handleNextMonth = () => {
        setDate((prevDate) => addMonths(prevDate, 1));
    };

    const handlePrevMonth = () => {
        setDate((prevDate) => subMonths(prevDate, 1));
    };

    return (
        <section className={scss.calendarHeader}>
            <h2 className={scss.title}>Month</h2>

            <div className={scss.wrapper}>
                <div className={scss.date}>
                    <button className={scss.arrowButton} onClick={handlePrevMonth}>
                        <Icon variant="chevron-left" className={scss.arrowIcon} />
                    </button>
                    <p className={scss.dateText}>{formattedDate}</p>
                    <button className={scss.arrowButton} onClick={handleNextMonth}>
                        <Icon variant="chevron-right" className={scss.arrowIcon} />
                    </button>
                </div>

                <button className={scss.statisticButton}>
                    <Icon variant="pie-chart" className={scss.statisticIcon} />
                </button>
            </div>
        </section>
    );
};

export default CalendarHeader;
