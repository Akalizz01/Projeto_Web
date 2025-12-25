const express = require('express');
const router = express.Router();
const connection = require('../database/db');

<<<<<<< HEAD
=======
// Criar utilizador
router.post('/', (req, res) => {
  const { nome, email, password } = req.body;

  connection.query(
    "INSERT INTO utilizadores (nome, email, password) VALUES (?, ?, ?)",
    [nome, email, password],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({
        id: result.insertId,
        nome,
        email
      });
    }
  );
});

>>>>>>> 96c6297d45370ac21e778bc9682a9aa5975eaf6a
// Listar utilizadores
router.get('/', (req, res) => {
  connection.query(
    "SELECT id, nome, email FROM utilizadores",
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json(rows);
    }
  );
});

module.exports = router;
