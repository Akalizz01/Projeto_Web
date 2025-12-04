const express = require('express');
const router = express.Router();
const pool = require('../database/db');

router.post('/', async (req, res) => {
  const { nome, email, password } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO utilizadores (nome, email, password) VALUES (?, ?, ?)',
      [nome, email, password]
    );
    res.status(201).json({ id: result.insertId, nome, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, nome, email FROM utilizadores');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
