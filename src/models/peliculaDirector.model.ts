import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Pelicula from './pelicula.model';
import Director from './director.model';

@Table({
  tableName: 'pelicula_director',
  timestamps: false,
})
class PeliculaDirector extends Model {
  @ForeignKey(() => Director)
  @Column({
    primaryKey: true,
  })
  directorIddirector!: number;

  @ForeignKey(() => Pelicula)
  @Column({
    primaryKey: true,
  })
  peliculaIdpelicula!: number;
}

export default PeliculaDirector;
