import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { endOfDay, startOfDay } from 'date-fns';
import authOptions from '@/configs/next-auth';
import prisma from '@/configs/prisma';

export const GET = async (req: NextRequest, { params }: { params: { date: string } }) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { date } = params;

        const startDate = startOfDay(new Date(date)).toISOString();
        const endDate = endOfDay(new Date(date)).toISOString();

        const dailyWaters = await prisma.water.findMany({
            where: {
                userId: '66ee6bc06babb366fc53c581',
                date: {
                    gte: startDate,
                    lte: endDate,
                },
            },
        });

        return NextResponse.json(dailyWaters, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
};
