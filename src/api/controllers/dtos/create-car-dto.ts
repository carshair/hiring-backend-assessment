export interface CreateCarDTO {
  licensePlate: string;
  registration: number;
  registrationState: string;
  registrationExpiration: Date;
  name: string;
  vin: string;
  carValue: number;
  currentMileage: number;
  description: string;
}
