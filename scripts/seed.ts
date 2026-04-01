import mongoose from 'mongoose';
import connectDB from '../lib/mongodb';
import Hotel from '../lib/models/Hotel';
import { loadEnvConfig } from '@next/env';
import path from 'path';

loadEnvConfig(process.cwd());

const hotels = [
  {
    name: "KGB Coolriver",
    location: "Near RAM Nagar, RTC Complex, Vizag",
    rooms: 24,
    description: "Premium corporate hotel in Visakhapatnam near KA Paul Convention Hall.",
    priceRange: "₹₹₹",
    basePrice: 2499,
    offer: "20% Corporate Discount",
    isAvailable: true,
    imageUrl: "/gallery/cool-river/logo.jpeg"
  },
  {
    name: "KGB Legend Grand",
    location: "Opposite RTC Complex, Vizag",
    rooms: 30,
    description: "Best budget-friendly hotel for business and leisure travelers in Vizag.",
    priceRange: "₹₹",
    basePrice: 1599,
    offer: "Seasonal Special: 15% OFF",
    isAvailable: true,
    imageUrl: "/gallery/legend-grand/logo.jpeg"
  },
  {
    name: "KGB Villa Homes",
    location: "Near Railway Station, Vizag",
    rooms: 12,
    description: "Spacious homely rooms for families visiting Visakhapatnam.",
    priceRange: "₹₹",
    basePrice: 1899,
    offer: "Family Package: Buy 2 Nights Get 10% OFF",
    isAvailable: true,
    imageUrl: "/gallery/villa-homes/logo.jpeg"
  }
];

async function seed() {
  try {
    await connectDB();
    console.log('Connected to DB');
    
    // Clear existing
    await Hotel.deleteMany({});
    console.log('Cleared existing hotels');
    
    // Add new
    await Hotel.insertMany(hotels);
    console.log('Seed successful!');
    
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
}

seed();
