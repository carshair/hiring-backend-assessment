import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Index,
  Double,
} from "typeorm";
import { VehicleIdentificationCode } from "./vehicle-identification-code-entity";
@Entity()
export class Vehicle extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column({ type: "double" })
    mileage: Double;

  @Column()
    color: string;

  @Column({ type: "varchar", length: "10240", nullable: true })
    description: string;

  @Column({ type: "varchar", length: "6" })
  @Index({ unique: true })
    license_number: string;

  @Column()
    registration_number: string;

  @Column()
    registration_state: string;

  @Column({ type: "double" })
    value: Double;

  @Column({ type: "varchar", length: "128" })
    registration_name: string;

  @OneToOne(() => VehicleIdentificationCode, {
    onDelete: "CASCADE"
  })

  @JoinColumn()
    vehicle_identification_code: VehicleIdentificationCode;

  @CreateDateColumn()
    registration_expiry_date: Date;

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;

  @DeleteDateColumn()
    deletedDate: Date;
}
