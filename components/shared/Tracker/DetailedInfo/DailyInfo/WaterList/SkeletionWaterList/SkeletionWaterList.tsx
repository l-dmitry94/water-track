import Skeleton from 'react-loading-skeleton';
import scss from './SkeletionWaterList.module.scss';

const SkeletionWaterList = () => {
    return (
        <div className={scss.waterList}>
            {Array(3)
                .fill(0)
                .map((_, index) => (
                    <div key={index} className={scss.waterItem}>
                        <Skeleton circle className={scss.waterIconSkeleton} />
                        <div className={scss.info}>
                            <Skeleton className={scss.volume} />
                            <Skeleton className={scss.time} />
                        </div>
                        <div className={scss.controls}>
                            <Skeleton circle className={scss.controlIcon} />
                            <Skeleton circle className={scss.controlIcon} />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default SkeletionWaterList;
