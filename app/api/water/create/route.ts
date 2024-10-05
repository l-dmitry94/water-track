import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/configs/next-auth';
import prisma from '@/configs/prisma';
import parsedDate from '@/helpers/parsedDate';

export const POST = async (req: NextRequest) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();

        const date = parsedDate(body.date);

        const newWater = await prisma.water.create({
            data: {
                userId: session.user.id,
                ...body,
                date,
            },
        });

        return NextResponse.json(newWater, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
};
