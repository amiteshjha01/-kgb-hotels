import connectDB from './lib/mongodb';
import Hotel from './lib/models/Hotel';

async function listIds() {
    await connectDB();
    const hotels = await Hotel.find({}, 'name slug _id');
    console.log('HOTEL_DATA_START');
    console.log(JSON.stringify(hotels, null, 2));
    console.log('HOTEL_DATA_END');
    process.exit(0);
}

listIds();
