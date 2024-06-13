const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    images: [String],
    mainImage: String,
    brand: String,
    title: String,
    price: Number,
    description: String,
    category: {
      type: mongoose.ObjectId,
      ref: 'Category' 
    }
  });

  const Product = mongoose.model('Product', productSchema); 

  module.exports = Product;