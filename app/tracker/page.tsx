import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import authOptions from '@/configs/next-auth';
import { format } from 'date-fns';

const TrackerPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/signin');
    }
    const date = format(new Date(), 'yyyy-MM-dd');

    redirect(`/tracker/${date}`);
};

export default TrackerPage;
