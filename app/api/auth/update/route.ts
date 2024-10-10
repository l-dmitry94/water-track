import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/configs/next-auth';
import prisma from '@/configs/prisma';

export const PATCH = async (req: NextRequest) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();

        const user = await prisma.user.update({
            where: {
                id: session.user.id,
            },
            data: {
                ...body,
            },
        });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Profile updated successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
};
