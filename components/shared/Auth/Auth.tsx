import { FC, ReactNode } from 'react';
import Container from '@/components/ui/Container';
import Logo from '../Logo';
import Advantages from '../Welcome/Advantages';
import scss from './Auth.module.scss';

interface IAuth {
    children: ReactNode;
    title: string;
}

const Auth: FC<IAuth> = ({ children, title }) => {
    return (
        <section className={scss.auth}>
            <Container className={scss.container}>
                <div className={scss.wrapper}>
                    <Logo fullHeight>
                        <div className={scss.content}>
                            <h1 className={scss.title}>{title}</h1>
                            {children}
                        </div>
                    </Logo>

                    <Advantages auth />
                </div>
            </Container>
        </section>
    );
};

export default Auth;
