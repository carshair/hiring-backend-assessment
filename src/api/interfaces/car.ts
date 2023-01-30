import { IsArray, IsDateString, IsNumber, IsString } from "class-validator";

export class CarDTO {
  @IsNumber()
    licensePlateNumber: number;

  @IsNumber()
    registration: number;

  @IsDateString()
    registrationExpiry: Date;

  @IsString()
    registrationState: string;

  @IsString()
    registrationName: string;

  @IsString()
    vin: string;

  @IsNumber()
    vehicleValue: number;

  @IsNumber()
    currentMileage: number;

  @IsString()
    description: string;

  @IsString()
    color: string;

  @IsArray()
    images: string[];
}