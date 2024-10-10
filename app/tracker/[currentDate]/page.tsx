import Tracker from '@/components/shared/Tracker';
import authOptions from '@/configs/next-auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const TrackerDatePage = async ({ params }: { params: { currentDate: string } }) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/signin');
    }

    const { currentDate } = params;

    return <Tracker currentDate={currentDate} />;
};

export default TrackerDatePage;
