import { CarRepository } from "../repositories/car-repository";
import { decode } from "./vin-service";
import { CarEntity } from "../models";
import { CreateCarDTO } from "../controllers/dtos";

export class CarService {
  carRepository: CarRepository;
  constructor() {
    this.carRepository = new CarRepository();
  }

  async create(car: CreateCarDTO): Promise<CarEntity> {
    const vinInfo = decode(car.vin);
    const createdCar = await this.carRepository.create({ ...car, ...vinInfo });

    this.carRepository.save(createdCar);
    return createdCar;
  }
}