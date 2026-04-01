import mongoose, { Schema, model, models } from 'mongoose';

const BookingSchema = new Schema({
  hotelId: {
    type: String,
    required: true,
  },
  guestName: {
    type: String,
    required: true,
  },
  guestPhone: {
    type: String,
    required: true,
  },
  guestAge: {
    type: Number,
  },
  guestEmail: {
    type: String,
  },
  roomsRequested: {
    type: Number,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  enquiryDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'converted', 'lost'],
    default: 'pending',
  },
  bookingStatus: {
    type: String,
    enum: ['upcoming', 'staying', 'checked_out'],
    default: 'upcoming',
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
  paymentProgress: {
    type: Number,
    default: 0,
  },
  tokenAmount: {
    type: Number,
    default: 0,
  },
  priority: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'low',
  }
}, { timestamps: true });

// Pre-save middleware to calculate priority
BookingSchema.pre('save', async function(this: any) {
  if (this.checkInDate) {
    const today = new Date();
    const checkIn = new Date(this.checkInDate);
    const diffTime = checkIn.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 7) {
      this.priority = 'high';
    } else if (diffDays <= 30) {
      this.priority = 'medium';
    } else {
      this.priority = 'low';
    }
  }
});

const Booking = models.Booking || model('Booking', BookingSchema);

export default Booking;
