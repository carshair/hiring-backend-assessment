import {
  Index,
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";


@Entity()
export class VehicleIdentificationCode extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Index({ unique: true })
  @Column()
    code: string;

  @Column()
    make: string;

  @Column()
    make_id: string;

  @Column()
    manufacturer: string;

  @Column()
    manufacturer_id: string;

  @Column()
    model: string;

  @Column()
    model_id: string;

  @Column()
    model_year: string;

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;

  @DeleteDateColumn()
    deletedDate: Date;
}
