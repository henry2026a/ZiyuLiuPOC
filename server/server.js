const express = require('express');
const path = require('node:path');
const foodDatabase = require('./foodDatabase');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Return all five foods from the mock database as JSON.
app.get('/foods', (req, res) => {
  const foods = foodDatabase.getAll();
  console.log(`GET /foods: returning ${foods.length} items`);
  res.status(200).json(foods);
});

// Requests that do not match a route or a static file get a 404.
app.use((req, res) => {
  console.log(`404: ${req.method} ${req.path}`);
  res.status(404).json({ error: 'Not found' });
});

// Only listen when started directly, not when imported by the tests.
if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
