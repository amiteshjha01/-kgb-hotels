import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/lib/models/Booking';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secure_secret_key';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') || '';
    const dateRange = searchParams.get('dateRange') || 'all';
    const hotel = searchParams.get('hotel') || 'all';
    const priority = searchParams.get('priority') || 'all';
    const status = searchParams.get('status') || 'all';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    await connectDB();

    let query: any = {};

    // 🔍 Search Filter (Name, Email, Phone)
    if (search) {
      query.$or = [
        { guestName: { $regex: search, $options: 'i' } },
        { guestEmail: { $regex: search, $options: 'i' } },
        { guestPhone: { $regex: search, $options: 'i' } }
      ];
    }

    // 🗓️ Date Range Filter
    if (dateRange !== 'all') {
      const now = new Date();
      let start = new Date();
      let end = new Date();

      switch (dateRange) {
        case 'today':
          start.setHours(0, 0, 0, 0);
          end.setHours(23, 59, 59, 999);
          break;
        case 'yesterday':
          start.setDate(start.getDate() - 1);
          start.setHours(0, 0, 0, 0);
          end.setDate(end.getDate() - 1);
          end.setHours(23, 59, 59, 999);
          break;
        case 'this_week':
          const day = start.getDay();
          start.setDate(start.getDate() - day);
          start.setHours(0, 0, 0, 0);
          break;
        case 'last_week':
          start.setDate(start.getDate() - start.getDay() - 7);
          end.setDate(end.getDate() - end.getDay() - 1);
          start.setHours(0, 0, 0, 0);
          end.setHours(23, 59, 59, 999);
          break;
        case 'this_month':
          start.setDate(1);
          start.setHours(0, 0, 0, 0);
          break;
        case 'last_month':
          start.setMonth(start.getMonth() - 1);
          start.setDate(1);
          end.setDate(0);
          start.setHours(0, 0, 0, 0);
          end.setHours(23, 59, 59, 999);
          break;
        case 'this_year':
          start.setMonth(0, 1);
          start.setHours(0, 0, 0, 0);
          break;
        case 'custom':
          const from = searchParams.get('from');
          const to = searchParams.get('to');
          if (from) start = new Date(from);
          if (to) end = new Date(to);
          start.setHours(0, 0, 0, 0);
          end.setHours(23, 59, 59, 999);
          break;
      }
      query.enquiryDate = { $gte: start, $lte: end };
    }

    // 🏢 Hotel Filter
    if (hotel !== 'all') {
      query.hotelId = hotel;
    }

    // 🚨 Priority Filter
    if (priority !== 'all') {
      query.priority = priority;
    }

    // 🚥 Status Filter
    if (status !== 'all') {
      query.status = status;
    }

    const skip = (page - 1) * limit;
    const total = await Booking.countDocuments(query);
    const bookings = await Booking.find(query)
      .sort({ enquiryDate: -1 })
      .skip(skip)
      .limit(limit);

    // Get stats for charts based on the SAME query but grouped
    const stats = await Booking.aggregate([
      { $match: query },
      { $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$enquiryDate" } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    return NextResponse.json({ 
      bookings, 
      pagination: { total, pages: Math.ceil(total / limit), currentPage: page },
      chartData: stats.map(s => ({ date: s._id, count: s.count })) 
    });
  } catch (error: any) {
    console.error('Fetch bookings error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
