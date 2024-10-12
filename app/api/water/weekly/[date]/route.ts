import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns';
import authOptions from '@/configs/next-auth';
import prisma from '@/configs/prisma';

export const GET = async (req: NextRequest, { params }: { params: { date: string } }) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { date } = params;

        const startDate = startOfWeek(new Date(date)).toISOString();
        const endDate = endOfWeek(new Date(date)).toISOString();

        const weeklyWaters = await prisma.water.findMany({
            where: {
                userId: session.user.id,
                date: {
                    gte: startDate,
                    lte: endDate,
                },
            },
        });

        const weekDates = eachDayOfInterval({ start: new Date(startDate), end: new Date(endDate) });

        const result = weekDates.map((day) => {
            const dailyWaterEntries = weeklyWaters.filter(
                (water) => new Date(water.date).toDateString() === day.toDateString()
            );

            const totalVolume = dailyWaterEntries.reduce((total, entry) => total + entry.volume, 0);

            return {
                volume: totalVolume,
                date: day.toISOString(),
            };
        });

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
};
