const express = require('express');
const router = express.Router();
const pool = require('../database/db');
const { searchMovies, searchSeries } = require('../services/tmbd');

// Pesquisa de filmes/séries via TMDB
router.get('/search', async (req, res) => {
  const { query, type } = req.query; // type = 'movie' ou 'tv'
  try {
    let results;
    if (type === 'tv') {
      results = await searchSeries(query);
    } else {
      results = await searchMovies(query);
    }
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { nome, sinopse, duracao, diretor_id, ano_lancamento, poster_url, trailer_url } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO filmes_series (nome, sinopse, duracao, diretor_id, ano_lancamento, poster_url, trailer_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nome, sinopse, duracao, diretor_id, ano_lancamento, poster_url, trailer_url]
    );
    res.status(201).json({ id: result.insertId, nome });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM filmes_series');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
