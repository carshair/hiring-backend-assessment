import { Body, Get, JsonController, Post } from "routing-controllers";

import { VehicleEntity } from "../../../models";

@JsonController()
export class VehicleController {
  @Get("/vehicle/:vehicle_id")
  getOne(): Promise<VehicleEntity[]> {
    return VehicleEntity.find();
  }

  @Post()
  create(@Body() body: VehicleEntity): Promise<VehicleEntity> {
    console.log("body: ", body);
    return VehicleEntity.create(body).save();
  }
}
