import { getRepository } from "typeorm";
import { Get, JsonController, Param, UseInterceptor } from "routing-controllers";

import { Car } from "../models";
import { CarInterceptor } from "../interceptors";

@JsonController("/car")
@UseInterceptor(CarInterceptor)
export class CarController {
  @Get()
  async get() {
    return getRepository(Car).find();
  }

  @Get("/:id")
  async getById(@Param("id") id: string) {
    return await getRepository(Car).findOne(id);
  }
}
