import { getRepository } from "typeorm";
import { Body, Delete, Get, JsonController, Param, Post, Put, UseInterceptor } from "routing-controllers";

import { Car } from "../models";
import { CarDTO } from "./../interfaces";
import { CarInterceptor } from "../interceptors";
import { VinDecoder } from "./utils/vinDecoder";

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

  @Post()
  async create(@Body() body: CarDTO) {
    const vinDecodedDetails = await VinDecoder(body.vin);
    const { Make, Model, ModelYear } = vinDecodedDetails;
    return getRepository(Car).save({
      make: Make || null,
      model: Model || null,
      year: ModelYear || null,
      ...body,
    });
  }

  @Put("/:id")
  async update(@Param("id") id: string, @Body() body: CarDTO) {
    const car = await getRepository(Car).findOne(id);
    if (!car) return;
    Object.assign(car, body);
    return getRepository(Car).save(car);
  }

  @Delete("/:id")
  async delete(@Param("id") id: string) {
    const car = await getRepository(Car).findOne(id);
    if (!car) return;
    return await getRepository(Car).remove(car);
  }
}
