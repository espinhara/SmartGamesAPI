import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    discount: String,
}, { timestamps: { createdAt: 'createdAt' } })

export default mongoose.model('Purchase', PurchaseSchema);