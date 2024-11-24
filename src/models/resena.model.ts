import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
//import Usuario from './user.model';
import Pelicula from './pelicula.model';
import User from './user.model';

@Table({
  tableName: 'resena',
  timestamps: false,
})
class Resena extends Model {
  @ForeignKey(() => User)
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
  descripcion!: string;
}

export default Resena;
