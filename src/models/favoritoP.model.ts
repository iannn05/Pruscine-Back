import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Usuario from './user.model';
import Pelicula from './pelicula.model';

@Table({
  tableName: 'favorito_p',
  timestamps: false,
})
class FavoritoP extends Model {
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
}

export default FavoritoP;
