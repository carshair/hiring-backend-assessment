import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("Cars")
export class CarEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column()
    licensePlate: string;

  @Column()
    registration: number;

  @Column()
    registrationState: string;

  @Column()
    registrationExpiration: Date;

  @Column()
    name: string;

  @Column()
    vin: string;

  @Column()
    carValue: number;

  @Column()
    currentMileage: number;

  @Column()
    description: string;

  @Column({nullable: true})
    year: number;

  @Column()
    make: string;

  @Column()
    model: string;

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;

  @DeleteDateColumn()
    deletedDate: Date;
}
