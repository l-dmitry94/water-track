import { FC } from 'react';
import Container from '@/components/ui/Container';
import MainInfo from './MainInfo';
import DetailedInfo from './DetailedInfo';
import scss from './Tracker.module.scss';

export interface ITracker {
    currentDate: string;
}

const Tracker: FC<ITracker> = ({ currentDate }) => {
    return (
        <section className={scss.tracker}>
            <Container>
                <div className={scss.wrapper}>
                    <MainInfo />
                    <DetailedInfo currentDate={currentDate} />
                </div>
            </Container>
        </section>
    );
};

export default Tracker;
