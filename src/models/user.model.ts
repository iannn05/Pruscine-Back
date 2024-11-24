
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'usuario',
  timestamps: false,
})
class User extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  idusuario!: number;

  @Column(DataType.STRING)
  nombre!: string;

  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.TEXT)
  contrasenia!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false, 
    defaultValue: false, 
  })
  rol!: boolean;
  

  @Column(DataType.DATE)
  fechaNacimiento: Date = new Date();
}

export default User;
