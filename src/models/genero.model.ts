import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'genero',
  timestamps: false,
})
class Genero extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  idgenero!: number;

  @Column(DataType.STRING)
  nombre!: string;
}

export default Genero;
