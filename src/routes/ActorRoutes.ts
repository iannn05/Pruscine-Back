import HttpStatusCodes from '@src/common/HttpStatusCodes';
import ActorService from '@src/services/ActorService';
import { IActor } from '@src/models/Actor';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Get one actor.
 */
async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  const actor = await ActorService.getOne(id);
  return res.status(HttpStatusCodes.OK).json(actor);
}

/**
 * Get all actors.
 */
async function getAll(_: IReq, res: IRes) {
  const actors = await ActorService.getAll();
  return res.status(HttpStatusCodes.OK).json({ actors });
}

/**
 * Add one actor.
 */
async function add(req: IReq<{ actor: IActor }>, res: IRes) {
  const { actor } = req.body;
  await ActorService.add(actor);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one actor.
 */
async function update(req: IReq<IActor>, res: IRes) {
  const actor = req.body;
  await ActorService.update(actor);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one actor.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await ActorService.delete(id);
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
