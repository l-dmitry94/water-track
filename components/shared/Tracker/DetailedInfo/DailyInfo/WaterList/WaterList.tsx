'use client';

import { useEffect } from 'react';
import WaterItem from './WaterItem';
import ScrollBar from '@/components/ui/ScrollBar';
import useWaters from '@/store/useWaters';
import SkeletionWaterList from './SkeletionWaterList';
import scss from './WaterList.module.scss';
import { format } from 'date-fns';

const WaterList = () => {
    const waters = useWaters((state) => state.waters);
    const isLoading = useWaters((state) => state.isLoading);
    const getDailyWaters = useWaters((state) => state.getDailyWaters);
    const today = format(new Date(), 'yyyy-MM-dd');

    useEffect(() => {
        getDailyWaters(today);
    }, [getDailyWaters, today]);

    return (
        <section className={scss.waterSection}>
            {isLoading ? (
                <div className={scss.skeleton}>
                    <SkeletionWaterList />
                </div>
            ) : waters && waters.length > 0 ? (
                <ScrollBar className={scss.scroll}>
                    <div className={scss.waterList}>
                        {waters?.map((water) => <WaterItem key={water.id} {...water} />)}
                    </div>
                </ScrollBar>
            ) : (
                <p className={scss.text}>
                    You haven&apos;t drunk any water today, so maybe it&apos;s time to fix that?
                </p>
            )}
        </section>
    );
};

export default WaterList;
