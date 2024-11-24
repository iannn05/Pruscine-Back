import { IUser } from '@src/models/User';
import User from '@src/models/user.model';
import bcrypt from 'bcrypt';

// **** Functions **** //

/**
 * Get one user.
 */
async function getOne(id: number): Promise<IUser | null> {
  try {

    const usuario = await User.findOne({
      where: {
        idusuario: id
      }
    });


    return usuario ? usuario.toJSON() as IUser : null;

  } catch (error) {
    console.error("Error retrieving usuario:", error);
    return null;
  }
}


async function persists(id: number): Promise<boolean> {
  try {
    const usuario = await User.findByPk(id);
    return !!usuario;
  } catch (error) {
    console.error("Error checking usuario existence:", error);
    return false; 
  }
}


async function getAll(): Promise<IUser[]> {
  try {
    
    const usuarios = await User.findAll();
    return usuarios.map((usuario: { toJSON: () => IUser; }) => usuario.toJSON() as IUser);

  } catch (error) {
    console.error("Error retrieving usuarios:", error);
    return []; 
  }
}

async function add(usuario: IUser): Promise<string | void> {
  try {
    // Verificar que el usuario y la contraseña estén definidos
    if (!usuario || !usuario.contrasenia) {
      throw new Error('Usuario o contraseña no definidos.');
    }

    // Hashear la contraseña
    const contra = await bcrypt.hash(usuario.contrasenia, 10);

    // Crear el usuario en la base de datos
    await User.create({
      nombre: usuario.nombre,
      email: usuario.email,
      contrasenia: contra,
      fechaNacimiento: usuario.fechaNacimiento,
      rol: usuario.rol
    });

    return 'Usuario creado con éxito';
  } catch (error) {
    console.error('Error adding usuario:', error);
  }
}



async function update(usuario: IUser): Promise<void> {
  try {

    if (usuario.contrasenia) {
      usuario.contrasenia = await bcrypt.hash(usuario.contrasenia, 10);
    }

    await User.update(usuario, {
      where: {
        idUsuario: usuario.idusuario,
      },
    });

  } catch (error) {
    console.error("Error updating usuario:", error);
  }
}



async function delete_(id: number): Promise<void> {
  try {
    
    await User.destroy({
      where: {
        idUsuario: id
      }
    });

  } catch (error) {
    console.error("Error deleting usuario:", error);
   
  }
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;