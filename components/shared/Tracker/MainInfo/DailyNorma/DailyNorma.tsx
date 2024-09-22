'use client';

import { useSession } from 'next-auth/react';
import scss from './DailyNorma.module.scss';
import convertMillilitersToLiters from '@/helpers/convertMillilitersToLiters';
import Skeleton from 'react-loading-skeleton';

const DailyNorma = () => {
    const { data: session } = useSession();

    return (
        <section className={scss.dailyNorma}>
            <p className={scss.norma}>
                {session ? (
                    <>{`${convertMillilitersToLiters(session?.user?.volume)} L`}</>
                ) : (
                    <Skeleton containerClassName={scss.normaSkeleton} />
                )}
            </p>
            <p className={scss.text}>My daily norma</p>
        </section>
    );
};

export default DailyNorma;
