import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import Welcome from '@/components/shared/Welcome';
import authOptions from '@/configs/next-auth';

const WelcomePage = async () => {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect('/tracker');
    }

    return <Welcome />;
};

export default WelcomePage;
