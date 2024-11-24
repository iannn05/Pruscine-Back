


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IPelicula {
  idpelicula: number;
  nombre: string;
  anioPublicado: Date;
  pais_idpais: number;
  genero_idgenero: number;
  pelicula_idactor: number;
  pelicula_iddirector: number;
}



