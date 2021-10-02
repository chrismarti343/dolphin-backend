import mongoose from 'mongoose';

const productSchema = mongoose.Schema({

    productName: String,
    productCode: Number,
    price: Number,
    image: String,
    description: String,
    tag: String



})

const productdb = mongoose.model('productdb', productSchema);

export default productdb;