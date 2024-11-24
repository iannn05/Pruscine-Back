import HttpStatusCodes from '@src/common/HttpStatusCodes';

import { IResena } from '@src/models/Resena';
import { IReq, IRes } from './types/express/misc';
import ResenaService from '@src/services/ResenaService';


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
    const resena = await ResenaService.getAll();
    return res.status(HttpStatusCodes.OK).json({ resena });
}

async function getOne(req: IReq, res: IRes) {
  const usuario_idusuario = +req.params.usuario_idusuario;
  const pelicula_idpelicula = +req.params.pelicula_idpelicula
  const resena = await ResenaService.getOne(usuario_idusuario,pelicula_idpelicula);
  return res.status(HttpStatusCodes.OK).json( resena );
}

/**
 * Add one user.
 */
async function add(req: IReq<IResena>, res: IRes) {
  const resena = req.body;
  await ResenaService.addOne(resena);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<IResena>, res: IRes) {
  const resena = req.body;
  await ResenaService.updateOne(resena);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const usuario_idusuario = +req.params.usuario_idusuario;
  const pelicula_idpelicula = +req.params.pelicula_idpelicula;
  await ResenaService.delete(usuario_idusuario,pelicula_idpelicula);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  getOne,
  add,
  update,
  delete: delete_,
} as const;