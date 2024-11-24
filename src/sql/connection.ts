import Actor from '@src/models/actor.model';
import Director from '@src/models/director.model';
import FavoritoP from '@src/models/favoritoP.model';
import FavoritoR from '@src/models/favoritoR.model';
import Genero from '@src/models/genero.model';
import Lista from '@src/models/lista.model';
import Pais from '@src/models/pais.model';
import Pelicula from '@src/models/pelicula.model';
import PeliculaActor from '@src/models/peliculaActor.model';
import PeliculaDirector from '@src/models/peliculaDirector.model';
import PeliculaGenero from '@src/models/peliculaGenero.model';
import Resena from '@src/models/resena.model';
import Usuario from '@src/models/user.model';
import { Sequelize } from 'sequelize-typescript';


// Initialize Sequelize
const sequelize = new Sequelize({
  database: 'prucine',
  dialect: 'mysql',
  username: 'root',
  password: 'Cuker33632005',
  host: 'localhost',
  port: 3306,
  logging: console.log,
  models: [Actor, Director, FavoritoP, FavoritoR, Genero, Lista, Pais, Pelicula, PeliculaActor, PeliculaDirector, PeliculaGenero, Resena, Usuario], // Include MascotaVacuna model here
});

// Authenticate the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    // Sync all models including MascotaVacuna
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Database and tables have been created.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;