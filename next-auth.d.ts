import 'next-auth';

declare module 'next-auth' {
    interface User {
        weight: number;
        activeTime: number;
        volume: number;
        gender: 'woman' | 'man';
    }
    interface Session {
        user: User & DefaultSession['user'];
    }
}
