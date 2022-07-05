import { CarRepository } from "../repositories/car-repository";
import { decode } from "./vin-service";
import { CarEntity } from "../models";
import { CreateCarDTO } from "../controllers/dtos";
import { getCustomRepository } from "typeorm";

export class CarService {
  carRepository: CarRepository;
  constructor() {
    this.carRepository = getCustomRepository(CarRepository);
  }

  async create(car: CreateCarDTO): Promise<CarEntity> {
    const vinInfo = decode(car.vin);
    const createdCar = await this.carRepository.create({...car, ...vinInfo});

    return this.carRepository.save(createdCar);
  }
}