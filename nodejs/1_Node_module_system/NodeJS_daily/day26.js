const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const dbName = 'day26';

const productsCollection = [
  { name: 'Product 1', price: 10, quantity: 100 },
  { name: 'Product 2', price: 20, quantity: 200 },
  { name: 'Product 3', price: 30, quantity: 300 },
];
async function getProductStatistics() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db(dbName);

    const pipeline = [
      {
        $group: {
          _id: null,
          totalProducts: { $sum: 1 }, 
          averagePrice: { $avg: '$price' }, 
          highestQuantity: { $max: '$quantity' } 
        }
      }
    ];
    const result = await database.collection('your_collection_name').aggregate(pipeline).toArray();
    return result[0];
  } finally {
    await client.close();
  }
}
getProductStatistics()
  .then(productStats => {
    console.log(productStats);
  })
  .catch(err => {
    console.error('Error:', err);
  });
