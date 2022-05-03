import {
  Body,
  Get,
  JsonController,
  Post,
  Param,
  BadRequestError,
  HttpCode,
  NotFoundError,
  Put,
  Delete,
} from "routing-controllers";

import { VehicleIdentificationCodeController } from "../vehicle-identification-code";
import { Vehicle, VehicleIdentificationCode } from "../../../models";
import { VehicleCreateAPIInput, VehicleUpdateAPIInput, VehicleDeleteAPIResponse } from "./type";

import _isEmpty from "lodash/isEmpty";
import { debug } from "debug";


const debugLogger = debug("car-shair:debug:vechile");

@JsonController()
export class VehicleController {
  @Get("/vehicle/:vehicle_id")
  async getOne(@Param("vehicle_id") vehicle_id: string): Promise<Vehicle> {
    const vehicle = await Vehicle.createQueryBuilder("vehicle")
      .where("vehicle.id = :id", { id: vehicle_id })
      .leftJoinAndSelect("vehicle.vehicle_identification_code", "vehicle_identification_code")
      .getOne();
    if (_isEmpty(vehicle)) {
      throw new BadRequestError(`vehicle_id ${vehicle_id} was not found`);
    }
    return vehicle;
  }

  @Delete("/vehicle/:vehicle_id")
  async delete(@Param("vehicle_id") vehicle_id: string): Promise<VehicleDeleteAPIResponse> {
    const vehicle = await Vehicle.createQueryBuilder("vehicle")
      .where("vehicle.id = :id", { id: vehicle_id })
      .leftJoinAndSelect("vehicle.vehicle_identification_code", "vehicle_identification_code")
      .getOne();

    if (_isEmpty(vehicle)) {
      throw new NotFoundError(`vehicle:${vehicle_id} was not found.`);
    }

    const result = await VehicleIdentificationCode.createQueryBuilder("vehicle_identification_code")
      .delete()
      .where("vehicle_identification_code.id = :id", { id: vehicle.vehicle_identification_code.id })
      .execute();
    if (result.affected === 1) {
      const respResult: VehicleDeleteAPIResponse = {
        id: vehicle_id,
      };
      return respResult;
    }

    throw new BadRequestError(
      `vehicle_identification_code ${vehicle.vehicle_identification_code.id} was not found`,
    );
  }

  @Put("/vehicle/:vehicle_id")
  async update(
    @Body() body: VehicleUpdateAPIInput,
    @Param("vehicle_id") vehicle_id: string,
  ): Promise<Vehicle> {
    debugLogger("update vehicle with id ", vehicle_id);
    debugLogger("update vehicle with body ", body);
    const vehicle = await Vehicle.createQueryBuilder("vehicle")
      .where("vehicle.id = :id", { id: vehicle_id })
      .leftJoinAndSelect("vehicle.vehicle_identification_code", "vehicle_identification_code")
      .getOne();
    debugLogger("vechile: ", vehicle);
    if (_isEmpty(vehicle)) {
      throw new NotFoundError(`vehicle:${vehicle_id} was not found.`);
    }
    if (_isEmpty(body)) {
      return vehicle;
    }
    if (body.mileage) {
      if (body.mileage < 0) {
        throw new BadRequestError(` mileage ${body.mileage} cannot be negative.`);
      }
      vehicle.mileage = body.mileage;
    }
    if (body.value) {
      if (body.value < 0) {
        throw new BadRequestError(` value ${body.value} cannot be negative.`);
      }
      vehicle.value = body.value;
    }
    if (!_isEmpty(body.registration_expiry_date)) {
      const expiryDate = new Date(body.registration_expiry_date.trim());
      if (expiryDate === undefined || expiryDate.toString() === "Invalid Date") {
        throw new BadRequestError(
          `date:${body.registration_expiry_date} improper date format MM/DD/YYYY`,
        );
      }
      vehicle.registration_expiry_date = expiryDate;
    }
    if (!_isEmpty(body.description)) {
      vehicle.description = body.description;
    }
    if (!_isEmpty(body.color)) {
      vehicle.color = body.color;
    }
    if (!_isEmpty(body.license_number)) {
      if (body.license_number.trim().length !== 6) {
        throw new BadRequestError(
          `license number ${body.license_number.trim()} should be conisted of 6 characters`,
        );
      }
      vehicle.license_number = body.license_number;
      vehicle.registration_number = body.registration_number;
    }
    if (!_isEmpty(body.registration_state)) {
      vehicle.registration_state = body.registration_state;
    }
    if (!_isEmpty(body.registration_name)) {
      vehicle.registration_name = body.registration_name.trim();
    }
    if (!_isEmpty(body.vehicle_identification_number)) {
      if (body.vehicle_identification_number.trim() !== vehicle.vehicle_identification_code.code) {
        const vinCodeInstance = vehicle.vehicle_identification_code;
        vinCodeInstance.code = body.vehicle_identification_number;
        const vinCodeInstanceController = new VehicleIdentificationCodeController();
        const vinCodeResult = await vinCodeInstanceController.create(true, vinCodeInstance);
        if (vinCodeResult instanceof Error) {
          throw vinCodeResult as Error;
        }
        vehicle.vehicle_identification_code = vinCodeResult;
      }
    }
    return Vehicle.save(vehicle);
  }

  @HttpCode(201)
  @Post("/vehicle")
  async create(@Body() body: VehicleCreateAPIInput): Promise<Vehicle> {
    const [isValid, message] = this.isValidVehicle(body);
    if (isValid === false) {
      throw new BadRequestError(message);
    }

    const vinCodeInstance = new VehicleIdentificationCode();
    vinCodeInstance.code = body.vehicle_identification_number;

    const vinCodeInstanceController = new VehicleIdentificationCodeController();
    const vinCodeResult = await vinCodeInstanceController.create(false, vinCodeInstance);

    if (vinCodeResult instanceof Error) {
      throw vinCodeResult as Error;
    }

    const vehicleInstance = this.createVehicleInstance(body, vinCodeResult);
    return Vehicle.create(vehicleInstance).save();
  }

  private isValidVehicle(body: VehicleCreateAPIInput): [boolean, string] {
    const expiryDate = new Date(body.registration_expiry_date.trim());

    if (expiryDate === undefined || expiryDate.toString() === "Invalid Date") {
      return [false, "improper date format MM/DD/YYYY"];
    }

    if (body.license_number.trim().length !== 6) {
      return [false, "license number should be conisted of 6 characters"];
    }

    if (body.vehicle_identification_number.trim() === "") {
      return [false, "vin cannot be empty string"];
    }

    if (body.mileage < 0) {
      return [false, "mileage cannot be negative"];
    }

    if (body.value < 0) {
      return [false, "value cannot be negative"];
    }

    return [true, ""];
  }

  private createVehicleInstance(body: VehicleCreateAPIInput, codeVal: VehicleIdentificationCode): Vehicle {
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
    result.value = body.value;
    return result;
  }
}
