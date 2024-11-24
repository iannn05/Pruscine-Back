import { IActor } from '@src/models/Actor';
import Actor from '@src/models/actor.model';

/**
 * Get one actor.
 */
async function getOne(idactor: number): Promise<IActor | null> {
  try {
    const actor = await Actor.findOne({
      where: {
        idactor: idactor
      }
    });
    return actor ? actor.toJSON() as IActor : null;
  } catch (error) {
    console.error("Error retrieving actor:", error);
    return null;
  }
}

/**
 * Check if actor exists.
 */
async function persists(idactor: number): Promise<boolean> {
  try {
    const actor = await Actor.findByPk(idactor);
    return !!actor;
  } catch (error) {
    console.error("Error checking actor existence:", error);
    return false;
  }
}

/**
 * Get all actors.
 */
async function getAll(): Promise<IActor[]> {
  try {
    const actors = await Actor.findAll();
    return actors.map((actor: { toJSON: () => IActor; }) => actor.toJSON() as IActor);
  } catch (error) {
    console.error("Error retrieving actors:", error);
    return [];
  }
}

/**
 * Add new actor.
 */
async function add(actor: IActor): Promise<string | void> {
  try {
    await Actor.create({
      nombre: actor.nombre,
      fechaNacimiento: actor.fechaNacimiento,
      descripcion: actor.descripcion
    });
    return 'Actor creado con éxito';
  } catch (error) {
    console.error('Error adding actor:', error);
    throw error;
  }
}

/**
 * Update existing actor.
 */
async function update(actor: IActor): Promise<void> {
  try {
    const actorUpdate = {
      nombre: actor.nombre,
      fechaNacimiento: actor.fechaNacimiento,
        descripcion: actor.descripcion
    };
    await Actor.update(actorUpdate, {
      where: {
        idactor: actor.idactor
      },
    });
  } catch (error) {
    console.error("Error updating actor:", error);
  }
}

/**
 * Delete actor.
 */
async function delete_(idactor: number): Promise<void> {
  try {
    await Actor.destroy({
      where: {
        idactor: idactor
      }
    });
  } catch (error) {
    console.error("Error deleting actor:", error);
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
