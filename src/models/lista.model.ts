import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import Usuario from './user.model';
import Pelicula from './pelicula.model';

@Table({
  tableName: 'lista',
  timestamps: false,
})
class Lista extends Model {
  @ForeignKey(() => Usuario)
  @Column({
    primaryKey: true,
  })
  usuarioIdusuario!: number;

  @ForeignKey(() => Pelicula)
  @Column({
    primaryKey: true,
  })
  peliculaIdpelicula!: number;

  @Column(DataType.STRING)
  nombre!: string;
}

export default Lista;
