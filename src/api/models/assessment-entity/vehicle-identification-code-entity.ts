import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("TableNameForVehicleIdentificationCodeEntity")
export class VehicleIdentificationCodeEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column()
    exampleColumn: string;

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;

  @DeleteDateColumn()
    deletedDate: Date;
}
