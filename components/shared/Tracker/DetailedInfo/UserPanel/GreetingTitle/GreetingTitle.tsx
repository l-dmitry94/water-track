import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { ISession } from '@/types/session.types';
import scss from './GreetingTitle.module.scss';

const GreetingTitle: FC<ISession> = ({ session }) => {
    return (
        <section className={scss.section}>
            {session ? (
                <h1 className={scss.title}>
                    Hello<span className={scss.name}>{`, ${session?.user?.name || 'User'}`}</span>
                </h1>
            ) : (
                <Skeleton className={scss.titleSkeleton} />
            )}
        </section>
    );
};

export default GreetingTitle;
