import { Body, InternalServerError, JsonController, Post } from "routing-controllers";

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
    try {
      return this.carService.create(body);
    } catch (error) {
      console.error(error);
      throw new InternalServerError("Internal server error");
    }
  }
}
