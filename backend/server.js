const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Database connection pool using Environment Variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

app.get('/api', async (req, res) => {
  try {
    const result = await pool.query('SELECT content FROM messages ORDER BY id DESC LIMIT 1');
    if (result.rows.length > 0) {
      res.json({ message: result.rows[0].content });
    } else {
      res.json({ message: "No messages found in the database." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.listen(port, () => {
  console.log(`Backend API listening on port ${port}`);
});
