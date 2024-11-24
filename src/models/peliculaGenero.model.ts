import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Pelicula from './pelicula.model';
import Genero from './genero.model';

@Table({
  tableName: 'pelicula_genero',
  timestamps: false,
})
class PeliculaGenero extends Model {
  @ForeignKey(() => Pelicula)
  @Column({
    primaryKey: true,
  })
  peliculaIdpelicula!: number;

  @ForeignKey(() => Genero)
  @Column({
    primaryKey: true,
  })
  generoIdgenero!: number;
}

export default PeliculaGenero;
