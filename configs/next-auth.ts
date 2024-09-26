import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from './prisma';
import { ISignInForm } from '@/components/shared/Auth/SignInForm';

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials as ISignInForm;
                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });

                if (!user || !(await bcrypt.compare(password, user.password!))) {
                    throw new Error('Email or password is wrong');
                }

                return user as User;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.weight = user.weight;
                token.activeTime = user.activeTime;
                token.volume = user.volume;
                token.gender = user.gender;
            }

            return token;
        },

        async session({ session }) {
            const user = await prisma.user.findUnique({
                where: {
                    email: session.user?.email,
                },
            });

            if (!user) {
                throw new Error('User not found');
            }

            session.user.id = user.id;
            session.user.weight = user.weight;
            session.user.activeTime = user.activeTime;
            session.user.volume = user.volume;
            session.user.gender = user.gender;

            return session;
        },
    },
    session: {
        strategy: 'jwt',
    },

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: '/signin',
    },
};

export default authOptions;
