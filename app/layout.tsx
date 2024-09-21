import type { Metadata } from 'next';
import poppins from '@/constants/fonts';
import '@/styles/globals.scss';
import Providers from './providers';

export const metadata: Metadata = {
    title: 'Water Track',
    description: 'Record daily water intake and track',
    icons: {
        icon: '/favicon.ico',
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default RootLayout;
