const express = require('express');
const router = express.Router();
const pool = require('../database/db');

router.post('/', async (req, res) => {
  const { user_id, movie_id, classificacao, critica } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO reviews (user_id, movie_id, classificacao, critica) VALUES (?, ?, ?, ?)',
      [user_id, movie_id, classificacao, critica]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id/vote', async (req, res) => {
  try {
    await pool.query('UPDATE reviews SET votos_utilidade = votos_utilidade + 1 WHERE id = ?', [req.params.id]);
    res.json({ message: 'Voto registado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
