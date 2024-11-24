import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({
  tableName: 'actor',
  timestamps: false,
})
class Actor extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  idactor!: number;

  @Column(DataType.STRING)
  nombre!: string;

  @Column(DataType.DATE)
  fechaNacimiento!: Date;

  @Column(DataType.STRING)
  descripcion!: string;
}

export default Actor;