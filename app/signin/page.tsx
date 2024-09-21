import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import SignInForm from '@/components/shared/Auth/SignInForm';
import authOptions from '@/configs/next-auth';

const SignInPage = async () => {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect('/tracker');
    }

    return <SignInForm />;
};

export default SignInPage;
