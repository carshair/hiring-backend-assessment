export interface VehicleCreateAPIInput {
  mileage: number;
  color: string;
  description: string | null;
  license_number: string;
  registration_number: string;
  registration_state: string;
  registration_expiry_date: string;
  registration_name: string;
  vehicle_identification_number: string;
  value: number;
}

export interface VehicleUpdateAPIInput {
  mileage?: number;
  color?: string;
  value?: number;
  description?: string;
  license_number?: string;
  registration_number?: string;
  registration_state?: string;
  registration_expiry_date?: string;
  registration_name?: string;
  vehicle_identification_number?: string;
}

export interface VehicleDeleteAPIResponse {
  id: string;
}
