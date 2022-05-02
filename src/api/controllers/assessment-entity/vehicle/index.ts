import {
  Body,
  Get,
  JsonController,
  Post,
  Param,
  BadRequestError,
  HttpCode,
} from "routing-controllers";

import { Vehicle } from "../../../models";
import { VehicleCreateAPIInput } from "./type";


export class ValidationError extends Error {
  name = "ValidationError";
  message = "Validation Error!";
  errors = ["blank", "minLength", "maxLength"];
}

@JsonController()
export class VehicleController {
  @Get("/vehicle/:vehicle_id")
  getOne(@Param("vehicle_id") vehicle_id: string): Promise<Vehicle> {
    console.log("vehicle_id: ", vehicle_id);
    return Vehicle.findOneBy({ id: vehicle_id });
  }

  @HttpCode(201)
  @Post("/vehicle")
  async create(@Body() body: VehicleCreateAPIInput): Promise<Vehicle> {
    const [isValid, message] = this.isValidVehicle(body);
    if (isValid === false) {
      throw new BadRequestError(message);
    }
    const vehicleInstance = this.createVehicleInstance(body);
    return Vehicle.create(vehicleInstance).save();
  }

  isValidVehicle(body: VehicleCreateAPIInput): [boolean, string] {
    const expiryDate = new Date(body.registration_expiry_date);

    if (expiryDate === undefined) {
      return [false, "improper date format MM/DD/YYYY"];
    }

    if (body.license_number.length !== 6) {
      return [false, "license number should be conisted of 6 characters"];
    }
    return [true, ""];
  }

  createVehicleInstance(body: VehicleCreateAPIInput): Vehicle {
    const result = new Vehicle();
    result.color = body.color;
    result.description = body.description;
    result.mileage = body.mileage;
    result.license_number = body.license_number;
    result.registration_number = body.registration_number;
    result.registration_state = body.registration_state;
    result.registration_expiry_date = new Date(body.registration_expiry_date);
    result.registration_name = body.registration_name;
    // result.vehicle_identification_number = body.vehicle_identification_number
    return result;
  }
}
