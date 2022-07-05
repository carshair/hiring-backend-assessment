import { IsDateString, IsOptional, Length } from "class-validator";
export class CarDTO {
  licensePlate: string;
  registration: number;
  registrationState: string;
  @IsDateString()
    registrationExpiration: Date;
  @IsOptional()
    name: string;
  @Length(17,17)
    vin: string;
  carValue: number;
  currentMileage: number;
  @IsOptional()
    description: string;
}
