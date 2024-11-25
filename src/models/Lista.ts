import moment from 'moment';
import { DataTypes } from 'sequelize';
import { table } from 'console';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface ILista {
  usuario_idusuario: number;
  pelicula_idpelicula: number;
  nombre: string;
}


