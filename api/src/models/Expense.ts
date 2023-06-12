import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
@Table
export class Expense extends Model<Expense> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    allowNull: false,
  })
  paymentMethod!: string;

  @Column({
    allowNull: false,
  })
  amount!: number;

  @Column({
    allowNull: false,
  })
  category!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}

//commit test2
