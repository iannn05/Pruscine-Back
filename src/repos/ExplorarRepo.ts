import { IPelicula } from '@src/models/Pelicula';
import Pelicula from '@src/models/pelicula.model';

// **** Functions **** //

/**
 * Get one resena.
 */
async function getOne(idpelicula: number): Promise<IPelicula | null> {
  try {
    const exploarar = await Pelicula.findOne({
      where: {
        idpelicula: idpelicula
      }
    });


    return exploarar ? exploarar.toJSON() as IPelicula : null;

  } catch (error) {
    console.error("Error retrieving pelicula:", error);
    return null;
  }
}

async function persists(idpelicula: number): Promise<boolean> {
  try {
    const pelicula = await Pelicula.findByPk(idpelicula);
    return !!pelicula;

  } catch (error) {
    console.error("Error checking pelicula existence:", error);
    return false; 
  }
}

async function getAll(): Promise<IPelicula[]> {
  try {
    
    const peliculas = await Pelicula.findAll();
    return peliculas.map((pelicula: { toJSON: () => IPelicula; }) => pelicula.toJSON() as IPelicula);

  } catch (error) {
    console.error("Error retrieving pelicula:", error);
    return []; 
  }
}

async function add(pelicula: IPelicula): Promise<string | void> {
    try {
      await Pelicula.create({
        idpelicula: pelicula.idpelicula,
        nombre: pelicula.nombre,
        anioPublicado: pelicula.anioPublicado,
        pais: pelicula.pais_idpais
      });
    } catch (error) {
      console.error("Error adding pelicula:", error);
    }
  }
  


async function update(pelicula: IPelicula): Promise<void> {
  try {

    await Pelicula.update(pelicula, {
      where: {
        idpelicula: pelicula.idpelicula
      }
    });

  } catch (error) {
    console.error("Error updating pelicula:", error);

  }
}


async function delete_(idpelicula: number): Promise<void> {
  try {
    
    await Pelicula.destroy({
      where: {
        idpelicula: idpelicula
      }
    });

  } catch (error) {
    console.error("Error deleting pelicula:", error);
   
  }
}


// **** Export default **** //

export default {
  getOne,
  getAll,
  persists,
  add,
  update,
  delete: delete_,
} as const;