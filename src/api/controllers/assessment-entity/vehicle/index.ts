import {
  Body,
  Get,
  JsonController,
  Post,
  Param,
  BadRequestError,
  HttpCode,
} from "routing-controllers";

import { VehicleIdentificationCodeController } from "../vehicle-identification-code";
import { Vehicle, VehicleIdentificationCode } from "../../../models";
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
    // user input validation
    const [isValid, message] = this.isValidVehicle(body);
    if (isValid === false) {
      throw new BadRequestError(message);
    }
    // wrap in transaction
    // create vehicle- identification-code object
    const vinCodeInstance = new VehicleIdentificationCode();
    vinCodeInstance.code = body.vehicle_identification_number;

    const vinCodeInstanceController = new VehicleIdentificationCodeController();
    const vinCodeResult = await vinCodeInstanceController.create(vinCodeInstance);

    if (vinCodeResult instanceof Error) {
      throw vinCodeResult as Error;
    }

    // create vehicle object
    const vehicleInstance = this.createVehicleInstance(body, vinCodeResult);
    return Vehicle.create(vehicleInstance).save();
  }

  isValidVehicle(body: VehicleCreateAPIInput): [boolean, string] {
    const expiryDate = new Date(body.registration_expiry_date.trim());

    if (expiryDate === undefined) {
      return [false, "improper date format MM/DD/YYYY"];
    }

    if (body.license_number.trim().length !== 6) {
      return [false, "license number should be conisted of 6 characters"];
    }

    if (body.vehicle_identification_number.trim() === "") {
      return [false, "vin cannot be empty string"];
    }

    return [true, ""];
  }

  createVehicleInstance(body: VehicleCreateAPIInput, codeVal: VehicleIdentificationCode): Vehicle {
    const result = new Vehicle();
    result.color = body.color;
    result.description = body.description;
    result.mileage = body.mileage;
    result.license_number = body.license_number;
    result.registration_number = body.registration_number;
    result.registration_state = body.registration_state;
    result.registration_expiry_date = new Date(body.registration_expiry_date);
    result.registration_name = body.registration_name;
    result.vehicle_identification_code = codeVal;
    return result;
  }
}
