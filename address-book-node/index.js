import express from 'express';
import bodyParser from 'body-parser';
import knex from 'knex';

const app = express();
const PORT = 3001;

// Initialize Knex with SQLite
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './oddballs.db'
  },
  useNullAsDefault: true
});

// Middleware
app.use(bodyParser.json());

// GET /api/oddballs - Returns list of oddballs (limit 100)
app.get('/api/oddballs', async (req, res) => {
  try {
    const results = await db('oddballs').select('*').limit(100);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// TODO: Add pagination using req.query.offset and req.query.limit

// TODO: Implement search/filter functionality

// TODO: Implement POST /api/oddballs - Create a new oddball

// TODO: Implement PUT /api/oddballs/:id - Update an oddball by ID

// TODO: Implement DELETE /api/oddballs/:id - Delete an oddball by ID

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
