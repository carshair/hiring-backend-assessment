import { Body, Get, JsonController, Post, Param } from "routing-controllers";

import { Vehicle } from "../../../models";

@JsonController()
export class VehicleController {
  @Get("/vehicle/:vehicle_id")
  getOne(@Param("vehicle_id") vehicle_id: string): Promise<Vehicle> {
    console.log("vehicle_id: ", vehicle_id);
    return Vehicle.findOneBy({ id: vehicle_id });
  }

  @Post("/vehicle")
  async create(@Body() body: Vehicle): Promise<Vehicle> {
    console.log("body: ", body);
    return Vehicle.create(body).save();
  }
}
