const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function averageAgeOfUsers(req, res) {
  try {
    await client.connect();
    const database = client.db('your_database_name');
    const collection = database.collection('users');

    const pipeline = [
      {
        $group: {
          _id: null,
          averageAge: { $avg: '$age' }
        }
      }
    ];

    const result = await collection.aggregate(pipeline).toArray();
    const averageAge = result[0].averageAge;

    res.json({ averageAge });
  } catch (error) {
    console.error('Error calculating average age:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}

module.exports = averageAgeOfUsers;
