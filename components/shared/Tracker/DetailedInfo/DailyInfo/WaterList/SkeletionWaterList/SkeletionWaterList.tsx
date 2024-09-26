import Skeleton from 'react-loading-skeleton';
import Icon from '@/components/ui/Icon';
import scss from './SkeletionWaterList.module.scss';

const SkeletionWaterList = () => {
    return (
        <div className={scss.waterList}>
            {Array(3)
                .fill(0)
                .map((_, index) => (
                    <div key={index} className={scss.waterItem}>
                        <div className={scss.info}>
                            <div className={scss.volume}>
                                <Skeleton containerClassName={scss.volumeSkeleton} />
                            </div>
                            <div className={scss.time}>
                                <Skeleton containerClassName={scss.timeSkeleton} />
                            </div>
                        </div>
                        <div className={scss.controls}>
                            <button className={scss.controlButton}>
                                <Icon variant="pencil" className={scss.controlIcon} />
                            </button>
                            <button className={scss.controlButton}>
                                <Icon variant="trash" className={scss.controlIcon} />
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default SkeletionWaterList;
