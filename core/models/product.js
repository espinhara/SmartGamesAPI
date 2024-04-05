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
        latitude: Schema.Types.Decimal128,
        longitude: Schema.Types.Decimal128,
        address: String,
    }]
})



export default mongoose.model('Product', ProductSchema)