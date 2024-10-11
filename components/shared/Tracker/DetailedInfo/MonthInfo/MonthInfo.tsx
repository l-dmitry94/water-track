'use client';

import { FC, useState } from 'react';
import Calendar from './Calendar';
import CalendarHeader from './CalendarHeader';
import { ITracker } from '../../Tracker';
import scss from './MonthInfo.module.scss';
import Statistics from './Statistics';

const MonthInfo: FC<ITracker> = ({ currentDate }) => {
    const [date, setDate] = useState(new Date(currentDate));
    const [isShowStatistic, setIsShowStatistic] = useState(false);

    const toggleShowStatistic = () => setIsShowStatistic(!isShowStatistic);

    return (
        <section className={scss.monthInfo}>
            <CalendarHeader
                currentDate={date}
                setDate={setDate}
                isShowStatistic={isShowStatistic}
                onShowStatistic={toggleShowStatistic}
            />
            {isShowStatistic ? <Statistics currentDate={date} /> : <Calendar currentDate={date} />}
        </section>
    );
};

export default MonthInfo;
