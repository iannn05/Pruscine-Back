import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import DirectorRepo from '@src/repos/DirectorRepo';
import { IDirector } from '@src/models/Director';

// **** Variables **** //

export const DIRECTOR_NOT_FOUND_ERR = 'Director not found';

// **** Functions **** //

/**
 * Get all directors.
 */
function getAll(): Promise<IDirector[]> {
  return DirectorRepo.getAll();
}

/**
 * Get one director.
 */
async function getOne(id: number): Promise<IDirector | null> {
  return DirectorRepo.getOne(id);
}

/**
 * Add one director.
 */
async function add(director: IDirector): Promise<string | void> {
  try {
    return await DirectorRepo.add(director);
  } catch (err) {
    console.error('Error in add director:', err);
    throw err;
  }
}

/**
 * Update one director.
 */
async function update(director: IDirector): Promise<void> {
  if (director.iddirector) {
    const persists = await DirectorRepo.persists(director.iddirector);
    if (!persists) {
      throw new RouteError(
        HttpStatusCodes.NOT_FOUND,
        DIRECTOR_NOT_FOUND_ERR,
      );
    }
  }
  return DirectorRepo.update(director);
}

/**
 * Delete one director by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await DirectorRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      DIRECTOR_NOT_FOUND_ERR,
    );
  }
  return DirectorRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  getOne,
  add,
  update,
  delete: _delete,
} as const;
