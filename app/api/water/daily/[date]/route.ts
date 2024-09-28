import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/configs/next-auth';
import prisma from '@/configs/prisma';

export const GET = async (req: NextRequest, { params }: { params: { date: string } }) => {
    const session = await getServerSession(authOptions);

    console.log(session);

    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const dailyWaters = await prisma.water.findMany({
            where: {
                userId: session.user.id,
            },
        });

        return NextResponse.json(dailyWaters, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
};
