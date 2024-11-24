import HttpStatusCodes from '@src/common/HttpStatusCodes';

import { IPelicula } from '@src/models/Pelicula';
import ExplorarService from '@src/services/ExplorarService';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const peliculas = await ExplorarService.getAll();
  return res.status(HttpStatusCodes.OK).json({ peliculas });
}

/**
 * Add one user.
 */
async function add(req: IReq<{pelicula: IPelicula}>, res: IRes) {
  const { pelicula } = req.body;
  await ExplorarService.addOne(pelicula);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<{pelicula: IPelicula}>, res: IRes) {
  const { pelicula } = req.body;
  await ExplorarService.updateOne(pelicula);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const idpelicula = +req.params.idpelicula;
  await ExplorarService.delete(idpelicula);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
