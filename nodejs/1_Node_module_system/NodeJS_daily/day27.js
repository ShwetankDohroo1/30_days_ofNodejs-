const express = require('express');
const authenticateAndAuthorize = require('./authenticateAndAuthorize');

const app = express();

app.get('/admin/dashboard', authenticateAndAuthorize, (req, res) => {
    res.json({ message: 'Admin dashboard' });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
