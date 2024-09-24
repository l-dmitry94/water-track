import Container from '@/components/ui/Container';
import MainInfo from './MainInfo';
import DetailedInfo from './DetailedInfo';
import scss from './Tracker.module.scss';

const Tracker = () => {
    return (
        <section className={scss.tracker}>
            <Container>
                <div className={scss.wrapper}>
                    <MainInfo />
                    <DetailedInfo />
                </div>
            </Container>
        </section>
    );
};

export default Tracker;
