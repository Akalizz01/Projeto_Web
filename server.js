const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./recursos/rotas/users');
const movieRoutes = require('./recursos/rotas/movies');
const reviewRoutes = require('./recursos/rotas/reviews');
<<<<<<< HEAD
const authRoutes = require('./recursos/rotas/auth');
const favoritosRoutes = require('./recursos/rotas/favoritos');
const listasRoutes = require('./recursos/rotas/listas');
const tmdbRoutes = require('./recursos/rotas/tmdb');
const backofficeRoutes = require('./recursos/rotas/backoffice');
=======
>>>>>>> 96c6297d45370ac21e778bc9682a9aa5975eaf6a

const app = express();
app.use(cors());
app.use(bodyParser.json());

<<<<<<< HEAD
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/favoritos', favoritosRoutes);
app.use('/api/listas', listasRoutes);
app.use('/api/tmdb', tmdbRoutes);
app.use('/api/backoffice', backofficeRoutes);


const PORT = 3000;
=======
// Rotas
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 3000;
>>>>>>> 96c6297d45370ac21e778bc9682a9aa5975eaf6a
app.listen(PORT, () => {
  console.log(`Servidor ativo em http://localhost:${PORT}`);
});
