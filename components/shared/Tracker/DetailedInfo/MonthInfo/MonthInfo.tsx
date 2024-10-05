'use client';

import { FC } from 'react';
import Calendar from './Calendar';
import CalendarHeader from './CalendarHeader';
import { ITracker } from '../../Tracker';
import scss from './MonthInfo.module.scss';

const MonthInfo: FC<ITracker> = ({ currentDate }) => {
    return (
        <section className={scss.monthInfo}>
            <CalendarHeader currentDate={currentDate} />
            <Calendar currentDate={currentDate} />
        </section>
    );
};

export default MonthInfo;
