'use client';

import toastOptions from '@/configs/toaster';
import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface IProviders {
    children: ReactNode;
}

const Providers: FC<IProviders> = ({ children }) => {
    return (
        <SessionProvider>
            {children}
            <Toaster position="top-right" toastOptions={{ ...toastOptions }} />
        </SessionProvider>
    );
};

export default Providers;
