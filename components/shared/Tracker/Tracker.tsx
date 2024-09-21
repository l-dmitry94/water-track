'use client';

import { useSession } from 'next-auth/react';

const Tracker = () => {
    const session = useSession();
    console.log(session);

    return <div>Tracker</div>;
};

export default Tracker;
