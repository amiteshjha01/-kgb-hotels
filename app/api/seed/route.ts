import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import Booking from '@/lib/models/Booking';
import Hotel from '@/lib/models/Hotel';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    await connectDB();

    // 1. Seed Users
    const adminExists = await User.findOne({ email: 'admin@kgbhotels.com' });
    if (!adminExists) {
        const hashedPassword = await bcrypt.hash('Admin@12345', 10);
        await User.create({ email: 'admin@kgbhotels.com', password: hashedPassword, role: 'admin' });
    }

    const superAdminExists = await User.findOne({ email: 'superadmin@kgbhotels.com' });
    if (!superAdminExists) {
        const hashedPassword = await bcrypt.hash('Goli@171018', 10);
        await User.create({ email: 'superadmin@kgbhotels.com', password: hashedPassword, role: 'super_admin' });
    }

    // 2. Seed Hotels
    const hotelNames = ['cool_river', 'legend_grand', 'villa_homes'];
    for (const name of hotelNames) {
        const exists = await Hotel.findOne({ name: name.replace('_', ' ').toUpperCase() });
        if (!exists) {
            await Hotel.create({
                name: name.replace('_', ' ').toUpperCase(),
                location: 'Visakhapatnam, India',
                rooms: 30,
                basePrice: 2500,
                isAvailable: true,
                offer: '10% OFF via WhatsApp'
            });
        }
    }

    // 3. Seed some dummy bookings for testing filters
    const bookingsCount = await Booking.countDocuments();
    if (bookingsCount === 0) {
        await Booking.create([
            {
                hotelId: 'cool_river',
                guestName: 'Rahul Sharma',
                guestPhone: '9876543210',
                guestAge: 28,
                guestEmail: 'rahul@example.com',
                roomsRequested: 2,
                checkInDate: new Date(Date.now() + 86400000 * 3), // 3 days later (High Priority)
                checkOutDate: new Date(Date.now() + 86400000 * 5),
                paymentStatus: 'pending',
                paymentProgress: 25,
                tokenAmount: 1000,
                bookingStatus: 'upcoming',
                status: 'pending',
                priority: 'high'
            },
            {
                hotelId: 'villa_homes',
                guestName: 'Sunita Rao',
                guestPhone: '9123456789',
                guestAge: 35,
                guestEmail: 'sunita@example.com',
                roomsRequested: 1,
                checkInDate: new Date(Date.now() + 86400000 * 45), // 45 days later (Low Priority)
                checkOutDate: new Date(Date.now() + 86400000 * 47),
                paymentStatus: 'completed',
                paymentProgress: 100,
                tokenAmount: 0,
                bookingStatus: 'staying',
                status: 'converted',
                priority: 'low'
            }
        ]);
    }

    return NextResponse.json({ message: 'Seed successful with hotels and test bookings' });
  } catch (error: any) {
    console.error('Seeding error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
