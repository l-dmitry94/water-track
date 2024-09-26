import AddWaterBtn from './AddWaterBtn';
import ChooseDate from './ChooseDate';
import WaterList from './WaterList';
import scss from './DailyInfo.module.scss';

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
