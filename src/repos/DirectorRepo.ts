import { IDirector } from '@src/models/Director';
import Director from '@src/models/director.model';

/**
 * Get one director.
 */
async function getOne(iddirector: number): Promise<IDirector | null> {
  try {
    const director = await Director.findOne({
      where: {
        iddirector: iddirector
      }
    });
    return director ? director.toJSON() as IDirector : null;
  } catch (error) {
    console.error("Error retrieving director:", error);
    return null;
  }
}

/**
 * Check if director exists.
 */
async function persists(iddirector: number): Promise<boolean> {
  try {
    const director = await Director.findByPk(iddirector);
    return !!director;
  } catch (error) {
    console.error("Error checking director existence:", error);
    return false;
  }
}

/**
 * Get all directors.
 */
async function getAll(): Promise<IDirector[]> {
  try {
    const directors = await Director.findAll();
    return directors.map((director: { toJSON: () => IDirector; }) => director.toJSON() as IDirector);
  } catch (error) {
    console.error("Error retrieving directors:", error);
    return [];
  }
}

/**
 * Add new director.
 */
async function add(director: IDirector): Promise<string | void> {
  try {
    await Director.create({
      nombre: director.nombre,
      fechaNacimiento: director.fechaNacimiento,
      descripcion: director.descripcion
    });
    return 'Director creado con éxito';
  } catch (error) {
    console.error('Error adding director:', error);
    throw error;
  }
}

/**
 * Update existing director.
 */
async function update(director: IDirector): Promise<void> {
  try {
    const directorUpdate = {
      nombre: director.nombre,
      fechaNacimiento: director.fechaNacimiento,
      descripcion: director.descripcion
    };
    await Director.update(directorUpdate, {
      where: {
        iddirector: director.iddirector
      },
    });
  } catch (error) {
    console.error("Error updating director:", error);
  }
}

/**
 * Delete director.
 */
async function delete_(iddirector: number): Promise<void> {
  try {
    await Director.destroy({
      where: {
        iddirector: iddirector
      }
    });
  } catch (error) {
    console.error("Error deleting director:", error);
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
