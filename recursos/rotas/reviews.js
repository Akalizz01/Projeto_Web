const express = require('express');
const router = express.Router();
const connection = require('../database/db');

// Criar review
router.post('/', (req, res) => {
  const { user_id, movie_id, classificacao, critica } = req.body;

  connection.query(
    "INSERT INTO reviews (user_id, movie_id, classificacao, critica) VALUES (?, ?, ?, ?)",
    [user_id, movie_id, classificacao, critica],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({ id: result.insertId });
    }
  );
});

// Votar utilidade
router.put('/:id/vote', (req, res) => {
  connection.query(
    "UPDATE reviews SET votos_utilidade = votos_utilidade + 1 WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({ message: "Voto registado com sucesso!" });
    }
  );
});

module.exports = router;
