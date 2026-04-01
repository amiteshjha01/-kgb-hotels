import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Hotel from '@/lib/models/Hotel';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret';

export async function GET() {
  try {
    await connectDB();
    const hotels = await Hotel.find().sort({ name: 1 });
    return NextResponse.json({ hotels });
  } catch (error: any) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const hotel = await Hotel.create(data);
    return NextResponse.json({ message: 'Hotel created successfully', hotel }, { status: 201 });
  } catch (error: any) {
      console.error('Create hotel error:', error);
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
