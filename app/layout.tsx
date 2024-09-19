import type { Metadata } from 'next';
import poppins from '@/constants/fonts';
import '@/styles/globals.scss';

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
            <body className={poppins.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
