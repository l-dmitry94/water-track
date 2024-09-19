import Container from '@/components/ui/Container';
import Logo from '../Logo';
import scss from './Welcome.module.scss';
import WelcomeInfo from './WelcomeInfo';
import Advantages from './Advantages';

const Welcome = () => {
    return (
        <section className={scss.welcome}>
            <Container>
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
