import moment from 'moment';
import { DataTypes } from 'sequelize';
import { table } from 'console';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IUser {
  idusuario?: number;
  nombre: string;
  email: string;
  contrasenia: string;
  rol: boolean;
  fechaNacimiento: Date;
  
}

// **** Clase User **** //
class User {
  static new(nombre: string, email: string): IUser {
    return {
      nombre,
      email,
      contrasenia: '',
      rol: false,
      fechaNacimiento: new Date(),
    };
  }
}

export default User;



