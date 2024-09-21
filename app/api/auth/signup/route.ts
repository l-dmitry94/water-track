import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/configs/prisma';

export const POST = async (req: NextRequest) => {
    const { email, password } = await req.json();

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (user) {
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
};
