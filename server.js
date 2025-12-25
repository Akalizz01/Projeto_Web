const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./recursos/rotas/users');
const movieRoutes = require('./recursos/rotas/movies');
const reviewRoutes = require('./recursos/rotas/reviews');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ativo em http://localhost:${PORT}`);
});
