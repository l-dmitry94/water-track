'use client';

import { useSession } from 'next-auth/react';
import Skeleton from 'react-loading-skeleton';
import useWaters from '@/store/useWaters';
import scss from './ProgressBar.module.scss';

const ProgressBar = () => {
    const { data: session } = useSession();
    const waters = useWaters((state) => state.waters);

    const total = waters.reduce((acc, water) => acc + water.volume, 0);

    const handleDailyNorma = () => {
        const result = Math.round((total / session?.user?.volume) * 100);

        if (result > 100) {
            return 100;
        }
        return Math.round((total / session?.user?.volume) * 100);
    };

    return (
        <section className={scss.progressBar}>
            <p className={scss.text}>Today</p>
            <div className={scss.bar}>
                {session ? (
                    <div className={scss.progress}>
                        <div className={scss.filled} style={{ width: `${handleDailyNorma()}%` }}>
                            <p className={scss.value}>{`${handleDailyNorma()}%`}</p>
                        </div>
                    </div>
                ) : (
                    <Skeleton containerClassName={scss.progressSkeleton} />
                )}

                <div className={scss.percentages}>
                    <p className={scss.percent}>0%</p>
                    <p className={scss.percent}>50%</p>
                    <p className={scss.percent}>100%</p>
                </div>
            </div>
        </section>
    );
};

export default ProgressBar;
