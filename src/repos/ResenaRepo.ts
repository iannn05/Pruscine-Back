import { IResena } from "@src/models/Resena";
import Resena from "@src/models/resena.model";
// **** Functions **** //

/**
 * Get one resena.
 */
async function getOne(usuario_idusuario: number, pelicula_idpelicula: number): Promise<IResena | null> {
  try {
    const resena = await Resena.findOne({
      where: {
        usuario_idusuario: usuario_idusuario ,
        pelicula_idpelicula: pelicula_idpelicula
      }
    });


    return resena ? resena.toJSON() as IResena : null;

  } catch (error) {
    console.error("Error retrieving resena:", error);
    return null;
  }
}

async function persists(usuario_idusuario: number, pelicula_idpelicula: number): Promise<boolean> {
  return Resena.findOne({ where: { usuario_idusuario: usuario_idusuario, pelicula_idpelicula:pelicula_idpelicula } }).then((resena) => {
    if (resena) {
      return true;
    }
    return false;
  });
}

async function getAll(): Promise<IResena[]> {
  try {
    
    const resenas = await Resena.findAll();
    return resenas.map((resena: { toJSON: () => IResena; }) => resena.toJSON() as IResena);

  } catch (error) {
    console.error("Error retrieving resena:", error);
    return []; 
  }
}

async function add(resena: IResena): Promise<void> {
    try {
      await Resena.create({
        usuario_idusuario: resena.usuario_idusuario,
        pelicula_idpelicula: resena.pelicula_idpelicula,
      });
  
    } catch (error) {
      console.error("Error adding resena:", error);
  
    }
  }


async function update(resena: IResena): Promise<void> {
  try {

    await Resena.update(resena, {
      where: {
        usuario_idusuario: resena.usuario_idusuario,
        pelicula_idpelicula: resena.pelicula_idpelicula
      }
    });

  } catch (error) {
    console.error("Error updating resena:", error);

  }
}


async function delete_(usuario_idusuario: number, pelicula_idpelicula: number): Promise<void> {
  try {
    
    await Resena.destroy({
      where: {
        usuario_idusuario: usuario_idusuario,
        pelicula_idpelicula: pelicula_idpelicula
      }
    });

  } catch (error) {
    console.error("Error deleting resena:", error);
   
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