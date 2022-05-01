import { VehicleIdentificationCodeEntity } from "../../../models";
import { DecodedVIN } from "./type";


export class VehicleIdentificationCodeController {
  getVINDecodedInfo(): Promise<DecodedVIN | null> {
    // Todo: add 3rd party api call
    return new Promise((resolve) => {
      resolve(null);
    });
  }

  create(
    vehicleIdentificationCodeInstance: VehicleIdentificationCodeEntity,
  ): Promise<VehicleIdentificationCodeEntity> {
    vehicleIdentificationCodeInstance.id = "veh_xxxxxxxxxxxx_1";
    return VehicleIdentificationCodeEntity.create(vehicleIdentificationCodeInstance).save();
  }
}
