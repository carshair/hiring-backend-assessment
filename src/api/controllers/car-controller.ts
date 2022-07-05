import { Body, JsonController, Post } from "routing-controllers";

import { CarEntity } from "../models";
import { CarService } from "../services";
import { CreateCarDTO } from "./dtos/";

@JsonController("/car")
export class CarController {
  carService: CarService;
  constructor() {
    this.carService = new CarService();
  }

  @Post()
  create(@Body() body: CreateCarDTO): Promise<CarEntity> {
    return this.carService.create(body);
  }
}
