import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import ListaRepo from '@src/repos/ListaRepo';
import { ILista } from '@src/models/Lista';

// **** Variables **** //
export const LISTA_NOT_FOUND_ERR = 'Lista not found';

// **** Functions **** //

/**
 * Get all listas by user.
 */
function getAll(usuario_idusuario: number, nombre: string): Promise<ILista[]> {
  return ListaRepo.getAllByUsuario(usuario_idusuario,nombre);
}

/**
 * Get one lista by user and list name.
 */
async function getOne(usuario_idusuario: number, nombre: string): Promise<ILista | null> {
  return ListaRepo.getOneByUsuario(usuario_idusuario, nombre);
}

/**
 * Add a new lista for a user.
 */
async function add(lista: ILista): Promise<string | void> {
  try {
    return await ListaRepo.addLista(lista);
  } catch (err) {
    console.error('Error in add lista:', err);
    throw err;
  }
}


/**
 * Delete a lista by user and list name.
 */
async function delete_(usuario_idusuario: number, nombre: string): Promise<void> {
  const persists = await ListaRepo.persist(usuario_idusuario, nombre);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      LISTA_NOT_FOUND_ERR,
    );
  }
  // Delete lista
  return ListaRepo.deleteLista(usuario_idusuario, nombre);
}

// **** Export default **** //
export default {
  getAll,
  getOne,
  add,
  delete: delete_,
} as const;
