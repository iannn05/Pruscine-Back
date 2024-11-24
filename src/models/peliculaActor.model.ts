import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Pelicula from './pelicula.model';
import Actor from './actor.model';

@Table({
  tableName: 'pelicula_actor',
  timestamps: false,
})
class PeliculaActor extends Model {
  @ForeignKey(() => Pelicula)
  @Column({
    primaryKey: true,
  })
  peliculaIdpelicula!: number;

  @ForeignKey(() => Actor)
  @Column({
    primaryKey: true,
  })
  actorIdactor!: number;
}

export default PeliculaActor;
