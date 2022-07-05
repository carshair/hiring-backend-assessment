import { Body, Delete, Get, JsonController, Param, Post, Put } from "routing-controllers";

import { CarEntity } from "../models";
import { CarService } from "../services";
import { CarDTO } from "./dtos/";

@JsonController("/car")
export class CarController {
  carService: CarService;
  constructor() {
    this.carService = new CarService();
  }

  @Post()
  create(@Body() body: CarDTO): Promise<CarEntity> {
    try {
      return this.carService.create(body);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Put("/:id")
  update(@Param("id") id: string, @Body() body: CarDTO): Promise<CarEntity> {
    try {
      return this.carService.update(id, body);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Delete("/:id")
  delete(@Param("id") id: string):Promise<CarEntity>{
    try {
      return this.carService.delete(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Get("/:id")
  get(@Param("id") id: string):Promise<CarEntity>{
    try {
      return this.carService.get(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  @Get()
  getAll():Promise<Array<CarEntity>>{
    try {
      return this.carService.getAll();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
