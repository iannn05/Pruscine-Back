import HttpStatusCodes from '@src/common/HttpStatusCodes';
import DirectorService from '@src/services/DirectorService';
import { IDirector } from '@src/models/Director';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Get one director.
 */
async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  const director = await DirectorService.getOne(id);
  return res.status(HttpStatusCodes.OK).json(director);
}

/**
 * Get all directors.
 */
async function getAll(_: IReq, res: IRes) {
  const directors = await DirectorService.getAll();
  return res.status(HttpStatusCodes.OK).json({ directors });
}

/**
 * Add one director.
 */
async function add(req: IReq<{ director: IDirector }>, res: IRes) {
  const { director } = req.body;
  await DirectorService.add(director);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one director.
 */
async function update(req: IReq<IDirector>, res: IRes) {
  const director = req.body;
  await DirectorService.update(director);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one director.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await DirectorService.delete(id);
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
