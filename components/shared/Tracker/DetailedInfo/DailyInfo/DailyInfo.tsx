import AddWaterBtn from './AddWaterBtn';
import ChooseDate from './ChooseDate';
import scss from './DailyInfo.module.scss';
import WaterList from './WaterList';

const DailyInfo = () => {
    return (
        <section className={scss.dailyInfo}>
            <div className={scss.wrapper}>
                <ChooseDate />
                <AddWaterBtn />
            </div>
            <WaterList />
        </section>
    );
};

export default DailyInfo;
