import HttpStatusCodes from '@src/common/HttpStatusCodes';
import GeneroService from '@src/services/GeneroService';
import { IGenero } from '@src/models/Genero';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Get one genero.
 */
async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  const genero = await GeneroService.getOne(id);
  return res.status(HttpStatusCodes.OK).json(genero);
}

/**
 * Get all generos.
 */
async function getAll(_: IReq, res: IRes) {
  const generos = await GeneroService.getAll();
  return res.status(HttpStatusCodes.OK).json({ generos });
}

/**
 * Add one genero.
 */
async function add(req: IReq<{ genero: IGenero }>, res: IRes) {
  const { genero } = req.body;
  await GeneroService.add(genero);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one genero.
 */
async function update(req: IReq<IGenero>, res: IRes) {
  const genero = req.body;
  await GeneroService.update(genero);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one genero.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await GeneroService.delete(id);
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
