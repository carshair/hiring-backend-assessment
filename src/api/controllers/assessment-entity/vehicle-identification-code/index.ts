import { VehicleIdentificationCode } from "../../../models";
import { DecodedVIN } from "./type";


export class VehicleIdentificationCodeController {
  getVINDecodedInfo(): Promise<DecodedVIN | null> {
    // Todo: add 3rd party api call
    return new Promise((resolve) => {
      resolve(null);
    });
  }

  create(
    vehicleIdentificationCodeInstance: VehicleIdentificationCode,
  ): Promise<VehicleIdentificationCode> {
    vehicleIdentificationCodeInstance.id = "veh_xxxxxxxxxxxx_1";
    return VehicleIdentificationCode.create(vehicleIdentificationCodeInstance).save();
  }
}
