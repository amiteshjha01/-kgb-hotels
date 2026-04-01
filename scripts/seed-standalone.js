const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGO_URI = 'mongodb+srv://amiteshwork0805_db_user:SdORMhtdYN1SZSgN@cluster0.cmanzkc.mongodb.net/kgb?retryWrites=true&w=majority';

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rooms: { type: Number, required: true },
  description: { type: String },
  priceRange: { type: String },
  basePrice: { type: Number, default: 0 },
  offer: { type: String, default: '' },
  isAvailable: { type: Boolean, default: true },
  imageUrl: { type: String }
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'super_admin'], default: 'admin' }
}, { timestamps: true });

const Hotel = mongoose.models.Hotel || mongoose.model('Hotel', HotelSchema);
const User = mongoose.models.User || mongoose.model('User', UserSchema);

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
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');
    
    // Seed Hotels
    await Hotel.deleteMany({});
    await Hotel.insertMany(hotels);
    console.log('Hotels seeded!');
    
    // Seed Admin User
    await User.deleteMany({ email: 'kgbcoolriver@gmail.com' });
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await User.create({
      email: 'kgbcoolriver@gmail.com',
      password: hashedPassword,
      role: 'super_admin'
    });
    console.log('Admin user seeded: kgbcoolriver@gmail.com / admin123');
    
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
}

seed();
