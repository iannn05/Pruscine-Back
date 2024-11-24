import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import ExplorarRepo from '@src/repos/ExplorarRepo';
import { IPelicula } from '@src/models/Pelicula';


// **** Variables **** //

export const PELICULA_NOT_FOUND_ERR = 'Pelicula not found';


// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<IPelicula[]> {
  return ExplorarRepo.getAll();
}

/**
 * Add one user.
 */
function addOne(pelicula: IPelicula): Promise<string | void> {
  try{
    console.log(pelicula);
    return ExplorarRepo.add(pelicula);
  } catch(err){
    return err;
  }
}


/**
 * Update one user.
 */
async function updateOne(pelicula: IPelicula): Promise<void> {
  const persists = await ExplorarRepo.persists(pelicula.idpelicula);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      PELICULA_NOT_FOUND_ERR,
    );
  }
  // Return user
  return ExplorarRepo.update(pelicula);
}

/**
 * Delete a user by their id.
 */
async function _delete(idpelicula: number): Promise<void> {
  const persists = await ExplorarRepo.persists(idpelicula);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      PELICULA_NOT_FOUND_ERR,
    );
  }
  // Delete user
  return ExplorarRepo.delete(idpelicula);
}


// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
