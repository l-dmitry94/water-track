import Container from '@/components/ui/Container';
import Logo from '../Logo';
import WelcomeInfo from './WelcomeInfo';
import Advantages from './Advantages';
import scss from './Welcome.module.scss';

const Welcome = () => {
    return (
        <section className={scss.welcome}>
            <Container className={scss.container}>
                <div className={scss.wrapper}>
                    <Logo>
                        <WelcomeInfo />
                    </Logo>

                    <Advantages />
                </div>
            </Container>
        </section>
    );
};

export default Welcome;
