import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Usuario from './user.model';
import Resena from './resena.model';

@Table({
  tableName: 'favorito_r',
  timestamps: false,
})
class FavoritoR extends Model {
  @ForeignKey(() => Usuario)
  @Column({
    primaryKey: true,
  })
  usuarioIdusuario!: number;

  @ForeignKey(() => Resena)
  @Column({
    primaryKey: true,
  })
  resenaUsuarioIdusuario!: number;

  @ForeignKey(() => Resena)
  @Column({
    primaryKey: true,
  })
  resenaPeliculaIdpelicula!: number;
}

export default FavoritoR;
