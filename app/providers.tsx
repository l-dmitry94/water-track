'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';
import toastOptions from '@/configs/toaster';
import 'react-loading-skeleton/dist/skeleton.css';

interface IProviders {
    children: ReactNode;
}

const Providers: FC<IProviders> = ({ children }) => {
    return (
        <SessionProvider>
            <SkeletonTheme baseColor="#f0eff4" highlightColor="#9be1a0">
                {children}
            </SkeletonTheme>

            <Toaster position="top-right" toastOptions={{ ...toastOptions }} />
        </SessionProvider>
    );
};

export default Providers;
