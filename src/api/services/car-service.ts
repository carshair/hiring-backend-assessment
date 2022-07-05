import { CarRepository } from "../repositories/car-repository";
import { decode } from "./vin-service";
import { CarEntity } from "../models";
import { CarDTO } from "../controllers/dtos";
import { getCustomRepository } from "typeorm";
import { NotFoundError } from "routing-controllers";

export class CarService {
  carRepository: CarRepository;
  constructor() {
    this.carRepository = getCustomRepository(CarRepository);
  }

  async create(car: CarDTO): Promise<CarEntity> {
    const vinInfo = decode(car.vin);
    const createdCar = await this.carRepository.create({...car, ...vinInfo});

    return this.carRepository.save(createdCar);
  }

  async update(id: string, car: CarDTO): Promise<CarEntity>{
    const vinInfo = decode(car.vin);
    const fetchedCar = await this.carRepository.findOne(id);
    if(!fetchedCar)
      throw new NotFoundError("Car not found!");

    return await this.carRepository.save({id, ...car, ...vinInfo});
  }

  async delete(id: string): Promise<CarEntity>{
    const fetchedCar = await this.carRepository.findOne(id);
    if(!fetchedCar)
      throw new NotFoundError("Car not found!");

    return await this.carRepository.remove(fetchedCar);
  }

  get(id: string): Promise<CarEntity>{
    return this.carRepository.findOne(id);
  }

  getAll(): Promise<Array<CarEntity>>{
    return this.carRepository.find();
  }
}