import { Router, Request } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';
import ExplorarRoutes from './ExplorarRoutes';
import AuthRoutes from './AuthRoutes';
import { authenticateToken } from '@src/middleware/validateToken';
import PeliculaRoutes from './PeliculaRoutes';
import { checkUserRole } from '@src/middleware/checkUser';  
import ListaRoutes from './ListaRoutes';
import Actor from '@src/models/actor.model';
import Director from '@src/models/director.model';
import Genero from '@src/models/genero.model';
import ActorRoutes from './ActorRoutes';
import DirectorRoutes from './DirectorRoutes';
import GeneroRoutes from './GeneroRoutes';



// **** Variables **** //

const apiRouter = Router();


// ** Add UserRouter ** //

const UserRouter = Router();
const ExplorarRepo = Router();
const ResenaRepo = Router();
const AuthRepo = Router();
const PeliRepo = Router();
const ListaRepo = Router();
const ActorRepo = Router();
const DirectorRepo = Router();
const GeneroRepo = Router();

UserRouter.get(
  Paths.Users.Get,
  UserRoutes.getAll,
);

UserRouter.get(
  Paths.Users.GetOne,
  UserRoutes.getOne,
);

// Add one user
UserRouter.post(
  Paths.Users.Add,
  UserRoutes.add,
);

// Update one user
UserRouter.put(
  Paths.Users.Update,
  authenticateToken,
  UserRoutes.update,
);

// Delete one user
UserRouter.delete(
  Paths.Users.Delete,
  UserRoutes.delete,
);

ExplorarRepo.get(
  Paths.Explorar.Get,
  ExplorarRoutes.getAll,
);

ExplorarRepo.post(
  Paths.Explorar.Add,
  ExplorarRoutes.add,
);

ExplorarRepo.put(
  Paths.Explorar.Update,
  ExplorarRoutes.update,
);

ExplorarRepo.delete(
  Paths.Explorar.Delete,
  ExplorarRoutes.delete,
);

ResenaRepo.get(
  Paths.Resena.Get,
  ExplorarRoutes.getAll,
);

ResenaRepo.post(
  Paths.Resena.Add,
  ExplorarRoutes.add,
);

ResenaRepo.put(
  Paths.Resena.Update,
  ExplorarRoutes.update,
);

ResenaRepo.delete(
  Paths.Resena.Delete,
  ExplorarRoutes.delete,
);

AuthRepo.post(
  Paths.Auth.Login,
  AuthRoutes.login,
);

PeliRepo.get(
  Paths.Pelicula.Get,
  PeliculaRoutes.getAll,
);

PeliRepo.post(
  Paths.Pelicula.Add,
  authenticateToken, // Verificación del token
  checkUserRole,
  PeliculaRoutes.add,
);

PeliRepo.put(
  Paths.Pelicula.Update,
  authenticateToken, // Verificación del token
  checkUserRole, // Verificación del rol
  PeliculaRoutes.update,
);

PeliRepo.delete(
  Paths.Pelicula.Delete,
  authenticateToken, // Verificación del token
  checkUserRole,
  PeliculaRoutes.delete,
);

ListaRepo.get(
  Paths.Lista.Get,
  ListaRoutes.getAll,
);

ListaRepo.get(
  Paths.Lista.GetOne,
  ListaRoutes.getOne,
);  

ListaRepo.post(
  Paths.Lista.Add,
  ListaRoutes.add,
);

ListaRepo.delete(
  Paths.Lista.Delete,
  ListaRoutes.delete,
);

ActorRepo.get(
  Paths.Actor.Get,
  ActorRoutes.getAll,
);

ActorRepo.get(
  Paths.Actor.GetOne,
  ActorRoutes.getOne,
);

ActorRepo.post(
  Paths.Actor.Add,
  authenticateToken, // Verificación del token
  checkUserRole,
  ActorRoutes.add,
);

ActorRepo.put(
  Paths.Actor.Update,
  authenticateToken, // Verificación del token
  checkUserRole,
  ActorRoutes.update,
);

ActorRepo.delete(
  Paths.Actor.Delete,
  authenticateToken, // Verificación del token
  checkUserRole,
  ActorRoutes.delete,
);

DirectorRepo.get(
  Paths.Director.Get,
  DirectorRoutes.getAll,
);

DirectorRepo.get(
  Paths.Director.GetOne,
  DirectorRoutes.getOne,
);

DirectorRepo.post(
  Paths.Director.Add,
  authenticateToken, // Verificación del token
  checkUserRole,
  DirectorRoutes.add,
);

DirectorRepo.put(
  Paths.Director.Update,
  authenticateToken, // Verificación del token
  checkUserRole,
  DirectorRoutes.update,
);

DirectorRepo.delete(
  Paths.Director.Delete,
  authenticateToken, // Verificación del token
  checkUserRole,
  DirectorRoutes.delete,
);

GeneroRepo.get(
  Paths.Genero.Get,
  GeneroRoutes.getAll,
);

GeneroRepo.get(
  Paths.Genero.GetOne,
  GeneroRoutes.getOne,
);

GeneroRepo.post(
  Paths.Genero.Add,
  authenticateToken, // Verificación del token
  checkUserRole,
  GeneroRoutes.add,
);

GeneroRepo.put(
  Paths.Genero.Update,
  authenticateToken, // Verificación del token
  checkUserRole,
  GeneroRoutes.update,
);

GeneroRepo.delete(
  Paths.Genero.Delete,
  authenticateToken, // Verificación del token
  checkUserRole,
  GeneroRoutes.delete,
);


// Add UserRouter
apiRouter.use(Paths.Users.Base, UserRouter);
apiRouter.use(Paths.Explorar.Base, ExplorarRepo);
apiRouter.use(Paths.Resena.Base, ResenaRepo);
apiRouter.use(Paths.Auth.Base, AuthRepo);
apiRouter.use(Paths.Pelicula.Base, PeliRepo);
apiRouter.use(Paths.Lista.Base, ListaRepo);
apiRouter.use(Paths.Actor.Base, ActorRepo);
apiRouter.use(Paths.Director.Base, DirectorRepo);
apiRouter.use(Paths.Genero.Base, GeneroRepo);

// **** Export default **** //

export default apiRouter;
