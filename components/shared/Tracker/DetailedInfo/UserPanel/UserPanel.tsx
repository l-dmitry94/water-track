'use client';

import { useSession } from 'next-auth/react';
import GreetingTitle from './GreetingTitle';
import UserBar from './UserBar';
import scss from './UserPanel.module.scss';

const UserPanel = () => {
    const { data: session } = useSession();

    console.log(session);

    return (
        <section className={scss.userPanel}>
            <GreetingTitle session={session} />
            <UserBar session={session} />
        </section>
    );
};

export default UserPanel;
