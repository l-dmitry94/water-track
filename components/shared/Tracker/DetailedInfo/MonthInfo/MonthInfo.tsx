'use client';

import { FC, useState } from 'react';
import Calendar from './Calendar';
import CalendarHeader from './CalendarHeader';
import { ITracker } from '../../Tracker';
import scss from './MonthInfo.module.scss';

const MonthInfo: FC<ITracker> = ({ currentDate }) => {
    const [date, setDate] = useState(new Date(currentDate));

    return (
        <section className={scss.monthInfo}>
            <CalendarHeader currentDate={date} setDate={setDate} />
            <Calendar currentDate={date} />
        </section>
    );
};

export default MonthInfo;
