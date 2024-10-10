import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/configs/cloudinary';

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const { paramsToSign } = body;

    const signature = cloudinary.utils.api_sign_request(
        paramsToSign,
        process.env.CLOUDINARY_API_SECRET!
    );

    return NextResponse.json({ signature });
};
