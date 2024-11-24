import { Table, Column, Model, ForeignKey, DataType, PrimaryKey, HasMany } from 'sequelize-typescript';
import Pais from './pais.model';
import Genero from './genero.model';
import Actor from './actor.model';
import Director from './director.model';

@Table({
  tableName: 'pelicula',
  timestamps: false,
})
class Pelicula extends Model {
  @PrimaryKey
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  idpelicula!: number;

  @Column(DataType.STRING)
  nombre!: string;

  @Column(DataType.DATE)
  anioPublicado!: Date;

  @ForeignKey(() => Pais)
  @Column
  paisIdpais!: number;

  @ForeignKey(() => Genero)
  @Column
  generoIdgenero!: number;

  @ForeignKey(() => Actor)
  @Column
  peliculaIdactor!: number;

  @ForeignKey(() => Director)
  @Column
  peliculaIddirector!: number;
}

export default Pelicula;
