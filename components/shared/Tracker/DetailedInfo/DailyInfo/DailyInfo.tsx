import { FC } from 'react';
import AddWaterBtn from './AddWaterBtn';
import ChooseDate from './ChooseDate';
import WaterList from './WaterList';
import { ITracker } from '../../Tracker';
import scss from './DailyInfo.module.scss';

const DailyInfo: FC<ITracker> = ({ currentDate }) => {
    return (
        <section className={scss.dailyInfo}>
            <div className={scss.wrapper}>
                <ChooseDate currentDate={currentDate} />
                <AddWaterBtn currentDate={currentDate} />
            </div>
            <WaterList currentDate={currentDate} />
        </section>
    );
};

export default DailyInfo;
