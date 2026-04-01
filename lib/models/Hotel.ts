import mongoose, { Schema, model, models } from 'mongoose';

const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  priceRange: {
    type: String,
  },
  basePrice: {
    type: Number,
    default: 0,
  },
  offer: {
    type: String,
    default: '',
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  imageUrl: {
    type: String,
  }
}, { timestamps: true });

const Hotel = models.Hotel || model('Hotel', HotelSchema);

export default Hotel;
