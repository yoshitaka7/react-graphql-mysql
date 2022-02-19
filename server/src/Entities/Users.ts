import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//typeormによるEntity定義
@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;
}