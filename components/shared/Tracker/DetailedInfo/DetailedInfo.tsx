import { FC } from 'react';
import UserPanel from './UserPanel';
import DailyInfo from './DailyInfo';
import MonthInfo from './MonthInfo';
import scss from './DetailedInfo.module.scss';
import { ITracker } from '../Tracker';

const DetailedInfo: FC<ITracker> = ({ currentDate }) => {
    return (
        <section className={scss.detailedInfo}>
            <UserPanel />
            <DailyInfo currentDate={currentDate} />
            <MonthInfo currentDate={currentDate} />
        </section>
    );
};

export default DetailedInfo;
