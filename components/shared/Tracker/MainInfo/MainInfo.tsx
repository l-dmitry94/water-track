import Logo from '@/components/shared/Logo';
import DailyNorma from './DailyNorma';
import InfoImage from './InfoImage';
import AddWaterButton from './AddWaterButton';
import ProgressBar from './ProgressBar';
import scss from './MainInfo.module.scss';

const MainInfo = () => {
    return (
        <section className={scss.mainInfo}>
            <Logo variant="green" className={scss.logo}>
                <div className={scss.content}>
                    <InfoImage />

                    <DailyNorma />

                    <ProgressBar />

                    <AddWaterButton />
                </div>
            </Logo>
        </section>
    );
};

export default MainInfo;
