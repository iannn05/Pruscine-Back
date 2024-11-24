import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'director',
  timestamps: false,
})
class Director extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  iddirector!: number;

  @Column(DataType.STRING)
  nombre!: string;

  @Column(DataType.DATE)
  fechaNacimiento!: Date;

  @Column(DataType.STRING)
  descripcion!: string;
}

export default Director;
