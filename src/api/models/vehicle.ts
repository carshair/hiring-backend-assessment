import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
  UpdateDateColumn,
} from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column()
    licensePlateNumber: number;

  @Column()
    registration: number;

  @Column()
    registrationExpiry: Date;

  @Column()
    registrationState: string;

  @Column()
    registrationName: string;

  @Column()
    vin: string;

  @Column()
    vehicleValue: number;

  @Column()
    currentMileage: number;

  @Column()
    description: string;

  @Column()
    color: string;

  @Column({ nullable: true })
    make: string;

  @Column({ nullable: true })
    model: string;

  @Column({ nullable: true })
    year: number;

  @Column("simple-array")
    images: string[];

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;

  @DeleteDateColumn()
    deletedDate: Date;
}