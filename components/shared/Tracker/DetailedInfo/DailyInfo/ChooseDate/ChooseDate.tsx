import { FC } from 'react';
import { format, isToday } from 'date-fns';
import { ITracker } from '../../../Tracker';
import scss from './ChooseDate.module.scss';

const ChooseDate: FC<ITracker> = ({ currentDate }) => {
    const date = new Date(currentDate);
    const today = isToday(date);

    return <h2 className={scss.date}>{today ? 'Today' : format(date, 'd, MMMM')}</h2>;
};

export default ChooseDate;
