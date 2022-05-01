import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("TableNameForVehicleEntity")
export class VehicleEntity extends BaseEntity {
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
