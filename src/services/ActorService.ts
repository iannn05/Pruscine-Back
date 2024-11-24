import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import ActorRepo from '@src/repos/ActorRepo';
import { IActor } from '@src/models/Actor';

// **** Variables **** //

export const ACTOR_NOT_FOUND_ERR = 'Actor not found';

// **** Functions **** //

/**
 * Get all actors.
 */
function getAll(): Promise<IActor[]> {
  return ActorRepo.getAll();
}

/**
 * Get one actor.
 */
async function getOne(id: number): Promise<IActor | null> {
  return ActorRepo.getOne(id);
}

/**
 * Add one actor.
 */
async function add(actor: IActor): Promise<string | void> {
  try {
    return await ActorRepo.add(actor);
  } catch (err) {
    console.error('Error in add actor:', err);
    throw err;
  }
}

/**
 * Update one actor.
 */
async function update(actor: IActor): Promise<void> {
  if (actor.idactor) {
    const persists = await ActorRepo.persists(actor.idactor);
    if (!persists) {
      throw new RouteError(
        HttpStatusCodes.NOT_FOUND,
        ACTOR_NOT_FOUND_ERR,
      );
    }
  }
  return ActorRepo.update(actor);
}

/**
 * Delete one actor by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await ActorRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      ACTOR_NOT_FOUND_ERR,
    );
  }
  return ActorRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  getOne,
  add,
  update,
  delete: _delete,
} as const;
