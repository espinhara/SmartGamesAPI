import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description: String,
    imageLink: String,
    price: Number,
    platforms: String,
    shops: String,
    storeAddresses: [{
        name: String,
        latitude: String,
        longitude: String,
        address: String,
    }]
})



export default mongoose.model('Product', ProductSchema)