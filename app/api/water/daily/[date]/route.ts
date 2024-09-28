import { NextRequest, NextResponse } from 'next/server';
// import { getServerSession } from 'next-auth';
import { endOfDay, startOfDay } from 'date-fns';
// import authOptions from '@/configs/next-auth';
import prisma from '@/configs/prisma';

export const GET = async (req: NextRequest, { params }: { params: { date: string } }) => {
    // const session = await getServerSession(authOptions);

    // console.log(session);

    // if (!session) {
    //     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    // }

    try {
        const { date } = params;

        console.log(date);

        const startDate = startOfDay(new Date(date)).toISOString();
        const endDate = endOfDay(new Date(date)).toISOString();

        console.log('startDate', startDate);
        console.log('endDate', endDate);

        const dailyWaters = await prisma.water.findMany({
            where: {
                // userId: session.user.id,
                date: {
                    gte: startDate,
                    lte: endDate,
                },
            },
        });

        console.log(dailyWaters);

        return NextResponse.json(dailyWaters, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
};
