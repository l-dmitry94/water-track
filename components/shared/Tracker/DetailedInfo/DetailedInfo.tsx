import scss from './DetailedInfo.module.scss';
import UserPanel from './UserPanel';

const DetailedInfo = () => {
    return (
        <section className={scss.detailedInfo}>
            <UserPanel />
        </section>
    );
};

export default DetailedInfo;
