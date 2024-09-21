import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import authOptions from '@/configs/next-auth';
import Tracker from '@/components/shared/Tracker';

const TrackerPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/signin');
    }
    return <Tracker />;
};

export default TrackerPage;
