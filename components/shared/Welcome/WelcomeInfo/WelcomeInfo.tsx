import Button from '@/components/ui/Button';
import scss from './WelcomeInfo.module.scss';

const WelcomeInfo = () => {
    return (
        <section className={scss.section}>
            <p className={scss.text}>Record daily water intake and track</p>
            <h1 className={scss.title}>Water consumption tracker</h1>

            <div className={scss.linksGroup}>
                <Button href="/signup" variant="contained">
                    Try tracker
                </Button>
                <Button href="/signin" variant="outlined">
                    Sign In
                </Button>
            </div>
        </section>
    );
};

export default WelcomeInfo;
