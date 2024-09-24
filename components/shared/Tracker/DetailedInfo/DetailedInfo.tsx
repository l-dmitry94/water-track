import UserPanel from './UserPanel';
import DailyInfo from './DailyInfo';
import scss from './DetailedInfo.module.scss';

const DetailedInfo = () => {
    return (
        <section className={scss.detailedInfo}>
            <UserPanel />
            <DailyInfo />
        </section>
    );
};

export default DetailedInfo;
