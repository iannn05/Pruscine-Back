import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import GeneroRepo from '@src/repos/GeneroRepo';
import { IGenero } from '@src/models/Genero';

// **** Variables **** //

export const GENERO_NOT_FOUND_ERR = 'Genero not found';

// **** Functions **** //

/**
 * Get all generos.
 */
function getAll(): Promise<IGenero[]> {
  return GeneroRepo.getAll();
}

/**
 * Get one genero.
 */
async function getOne(id: number): Promise<IGenero | null> {
  return GeneroRepo.getOne(id);
}

/**
 * Add one genero.
 */
async function add(genero: IGenero): Promise<string | void> {
  try {
    return await GeneroRepo.add(genero);
  } catch (err) {
    console.error('Error in add genero:', err);
    throw err;
  }
}

/**
 * Update one genero.
 */
async function update(genero: IGenero): Promise<void> {
  if (genero.idgenero) {
    const persists = await GeneroRepo.persists(genero.idgenero);
    if (!persists) {
      throw new RouteError(
        HttpStatusCodes.NOT_FOUND,
        GENERO_NOT_FOUND_ERR,
      );
    }
  }
  return GeneroRepo.update(genero);
}

/**
 * Delete one genero by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await GeneroRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      GENERO_NOT_FOUND_ERR,
    );
  }
  return GeneroRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  getOne,
  add,
  update,
  delete: _delete,
} as const;
