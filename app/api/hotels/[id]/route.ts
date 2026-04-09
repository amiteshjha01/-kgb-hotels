import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Hotel from '@/lib/models/Hotel';
import mongoose from 'mongoose';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await connectDB();

    let hotel;
    if (mongoose.Types.ObjectId.isValid(id)) {
      hotel = await Hotel.findById(id);
    } else {
      // Decode the id as it might be a component name (e.g. "KGB Coolriver")
      const name = decodeURIComponent(id);
      hotel = await Hotel.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } });
    }

    if (!hotel) {
      return NextResponse.json({ message: 'Hotel not found' }, { status: 404 });
    }

    return NextResponse.json({
      id: hotel._id,
      name: hotel.name,
      pricePerNight: hotel.basePrice,
      totalRooms: hotel.rooms
    });
  } catch (error: any) {
    console.error('Fetch hotel error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
