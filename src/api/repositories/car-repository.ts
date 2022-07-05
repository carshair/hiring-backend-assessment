import { EntityRepository, Repository } from "typeorm";
import { CarEntity } from "../models";

@EntityRepository(CarEntity)
export class CarRepository extends Repository<CarEntity> {
}
