'use client';

import Skeleton from 'react-loading-skeleton';
import { useSession } from 'next-auth/react';
import scss from './DailyNorma.module.scss';

const DailyNorma = () => {
    const { data: session } = useSession();

    return (
        <section className={scss.dailyNorma}>
            <p className={scss.norma}>
                {session ? (
                    `${session?.user?.volume / 1000} L`
                ) : (
                    <Skeleton containerClassName={scss.normaSkeleton} />
                )}
            </p>
            <p className={scss.text}>My daily norma</p>
        </section>
    );
};

export default DailyNorma;
