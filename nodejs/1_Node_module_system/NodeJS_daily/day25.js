const mongoose = require('mongoose');
const Product = require('./product.js');

async function createProductNameIndex() {
  try {
    await mongoose.connect('mongodb://localhost:27017/your_database', { useUnifiedTopology: true });
    const sampleProduct = new Product({
      name: 'shwetank',
      price: 11.99,
      description: 'This is was sample product.'
    });

    await sampleProduct.save();
    console.log('Index on "name" field created successfully.');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error creating index:', error);
  }
}

createProductNameIndex();
