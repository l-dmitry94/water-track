import Title from '@/components/ui/Title';
import Icon from '@/components/ui/Icon';
import scss from './DailyNorma.module.scss';

const DailyNorma = () => {
    return (
        <div className={scss.dailyNorma}>
            <Title>My daily norma</Title>

            <ul className={scss.list}>
                <li className={scss.listItem}>
                    <p className={scss.label}>For woman:</p>
                    <p className={scss.value}>V=(M*0,03) + (T*0,4)</p>
                </li>
                <li className={scss.listItem}>
                    <p className={scss.label}>For man:</p>
                    <p className={scss.value}>V=(M*0,04) + (T*0,6)</p>
                </li>
            </ul>

            <p className={scss.description}>
                <span className={scss.asterisk}>*</span> V is the volume of the water norm in liters
                per day, M is your body weight, T is the time of active sports, or another type of
                activity commensurate in terms of loads (in the absence of these, you must set 0)
            </p>

            <div className={scss.warning}>
                <Icon variant="exclamation" className={scss.exclamationIcon} />
                <p className={scss.exclamationText}>Active time in hours</p>
            </div>
        </div>
    );
};

export default DailyNorma;
