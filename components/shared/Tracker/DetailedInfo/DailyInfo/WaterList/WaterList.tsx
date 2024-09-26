'use client';

import { useEffect } from 'react';
import WaterItem from './WaterItem';
import ScrollBar from '@/components/ui/ScrollBar';
import useWaters from '@/store/useWaters';
import SkeletionWaterList from './SkeletionWaterList';
import scss from './WaterList.module.scss';

const WaterList = () => {
    const waters = useWaters((state) => state.waters);
    const isLoading = useWaters((state) => state.isLoading);
    const getDailyWaters = useWaters((state) => state.getDailyWaters);

    useEffect(() => {
        getDailyWaters(new Date().toISOString());
    }, [getDailyWaters]);

    console.log(waters);
    return (
        <section className={scss.waterSection}>
            {isLoading ? (
                <SkeletionWaterList />
            ) : (
                <ScrollBar className={scss.scroll}>
                    <div className={scss.waterList}>
                        {waters?.map((water) => <WaterItem key={water.id} {...water} />)}
                    </div>
                </ScrollBar>
            )}
        </section>
    );
};

export default WaterList;
