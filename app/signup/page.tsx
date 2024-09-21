import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import SignUpForm from '@/components/shared/Auth/SignUpForm';
import authOptions from '@/configs/next-auth';

const SignUpPage = async () => {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect('/tracker');
    }
    return <SignUpForm />;
};

export default SignUpPage;
