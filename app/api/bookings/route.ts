import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/lib/models/Booking';
import { sendBookingNotification } from '@/lib/email';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const hotelId = searchParams.get('hotelId');

    if (!hotelId) {
      return NextResponse.json({ message: 'hotelId is required' }, { status: 400 });
    }

    await connectDB();
    const bookings = await Booking.find({ hotelId });

    return NextResponse.json(bookings.map(b => ({
      hotelId: b.hotelId,
      checkIn: b.checkInDate,
      checkOut: b.checkOutDate,
      rooms: b.roomsRequested
    })));
  } catch (error: any) {
    console.error('Fetch bookings error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.guestName || !data.guestPhone || !data.hotelId) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    await connectDB();

    const booking = await Booking.create({
      ...data,
      status: 'pending',
      bookingStatus: 'upcoming',
      enquiryDate: new Date(),
    });

    // Send email notification to kgbcoolriver@gmail.com
    await sendBookingNotification(booking);

    return NextResponse.json({ message: 'Booking enquiry recorded successfully', booking });
  } catch (error: any) {
    console.error('Record booking error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
