const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    image1: String,
    image2: String,
    price: Number,
    category: String,
    Rating: Number
})

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;