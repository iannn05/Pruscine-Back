import { IGenero } from '@src/models/Genero';
import Genero from '@src/models/genero.model';

/**
 * Get one genero.
 */
async function getOne(idgenero: number): Promise<IGenero | null> {
  try {
    const genero = await Genero.findOne({
      where: {
        idgenero: idgenero
      }
    });
    return genero ? genero.toJSON() as IGenero : null;
  } catch (error) {
    console.error("Error retrieving genero:", error);
    return null;
  }
}

/**
 * Check if genero exists.
 */
async function persists(idgenero: number): Promise<boolean> {
  try {
    const genero = await Genero.findByPk(idgenero);
    return !!genero;
  } catch (error) {
    console.error("Error checking genero existence:", error);
    return false;
  }
}

/**
 * Get all generos.
 */
async function getAll(): Promise<IGenero[]> {
  try {
    const generos = await Genero.findAll();
    return generos.map((genero: { toJSON: () => IGenero; }) => genero.toJSON() as IGenero);
  } catch (error) {
    console.error("Error retrieving generos:", error);
    return [];
  }
}

/**
 * Add new genero.
 */
async function add(genero: IGenero): Promise<string | void> {
  try {
    await Genero.create({
      nombre: genero.nombre,
    });
    return 'Genero creado con éxito';
  } catch (error) {
    console.error('Error adding genero:', error);
    throw error;
  }
}

/**
 * Update existing genero.
 */
async function update(genero: IGenero): Promise<void> {
  try {
    const generoUpdate = {
      nombre: genero.nombre,
    };
    await Genero.update(generoUpdate, {
      where: {
        idgenero: genero.idgenero
      },
    });
  } catch (error) {
    console.error("Error updating genero:", error);
  }
}

/**
 * Delete genero.
 */
async function delete_(idgenero: number): Promise<void> {
  try {
    await Genero.destroy({
      where: {
        idgenero: idgenero
      }
    });
  } catch (error) {
    console.error("Error deleting genero:", error);
  }
}

// Export default
export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
