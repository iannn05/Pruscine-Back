import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'pais',
  timestamps: false,
})
class Pais extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  idpais!: number;

  @Column(DataType.STRING)
  nombre!: string;
}

export default Pais;
