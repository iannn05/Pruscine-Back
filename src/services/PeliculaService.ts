import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import PeliRepo from '@src/repos/PeliRepo';
import { IPelicula } from '@src/models/Pelicula';
import { IUser } from '@src/models/User';



// **** Variables **** //

export const PELICULA_NOT_FOUND_ERR = 'Pelicula not found';


// **** Functions **** //

/**
 * Get all peliculas.
 */
function getAll(): Promise<IPelicula[]> {
  return PeliRepo.getAll();
}
async function getOne(id :number): Promise<IPelicula | null> {
  return PeliRepo.getOne(id);
}

/**
 * Add one user.
 */
async function addOne(pelicula: IPelicula): Promise<string | void> {
  try {
    console.log(pelicula);
    return await PeliRepo.add(pelicula); 
  } catch (err) {
    console.error('Error in addOne:', err);
    throw err; 
  }
}



/**
 * Update one pelicula.
 */
async function updateOne(pelicula: IPelicula): Promise<void> {
  console.log(pelicula);
  if(pelicula.idpelicula){
  const persists = await PeliRepo.persists(pelicula.idpelicula);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      PELICULA_NOT_FOUND_ERR,
    );
  }
}
  // Return pelicula
  return PeliRepo.update(pelicula);
}

/**
 * Delete a pelicula by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await PeliRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      PELICULA_NOT_FOUND_ERR,
    );
  }
  // Delete user
  return PeliRepo.delete(id);
}


// **** Export default **** //

export default {
  getAll,
  getOne,
  addOne,
  updateOne,
  delete: _delete,
} as const;
