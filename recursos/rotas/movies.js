const express = require('express');
const router = express.Router();
const connection = require('../database/db');
const { searchMovies, searchSeries } = require('../services/tmbd');

// Criar filme/série
router.post('/', (req, res) => {
  const { nome, sinopse, duracao, diretor_id, ano_lancamento, poster_url, trailer_url } = req.body;

  connection.query(
    `INSERT INTO filmes_series 
    (nome, sinopse, duracao, diretor_id, ano_lancamento, poster_url, trailer_url)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [nome, sinopse, duracao, diretor_id, ano_lancamento, poster_url, trailer_url],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({ id: result.insertId, nome });
    }
  );
});

// Listar filmes/séries
router.get('/', (req, res) => {
  connection.query(
    "SELECT * FROM filmes_series",
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json(rows);
    }
  );
});

// Pesquisa via TMDB
router.get('/search', async (req, res) => {
  const { query, type } = req.query;

  try {
    const results = type === "tv"
      ? await searchSeries(query)
      : await searchMovies(query);

    res.json(results);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
