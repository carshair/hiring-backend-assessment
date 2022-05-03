import { VehicleIdentificationCode } from "../../../models";
import { APIDecodedVINValuesResponse, APIDecodedVINValuesResult } from "./type";
import axios from "axios";
import { debug } from "debug";

const debugLogger = debug("car-shair:debug:vehicle-identification-code");
const errorLogger = debug("car-shair:error:vehicle-identification-code");
export class VehicleIdentificationCodeController {
  private async getVINDecodedInfo(code: string): Promise<APIDecodedVINValuesResponse | Error> {
    // Todo: add 3rd party api call
    try {
      const decodedURL = `${process.env.VEHICLE_DECODE_API_URL}${code}?format=json`;
      debugLogger("decoded url: ", decodedURL);
      const response = await axios.get<APIDecodedVINValuesResponse>(decodedURL);
      debugLogger(`[status: ${response.status}] [data: ${response.data}]`);
      return new Promise((resolve) => {
        resolve(response.data);
      });
    } catch (error) {
      errorLogger(error);
      let err = new Error(`An unexpected error occurred: ${error}`);
      if (axios.isAxiosError(error)) {
        err = new Error(`"error message:  ${error.message}`);
      }
      return new Promise((resolve) => {
        resolve(err);
      });
    }
  }

  private async vehicleIdentificationCodeInstanceDataMassage(
    apiData: APIDecodedVINValuesResult,
    instance: VehicleIdentificationCode,
  ) {
    instance.make = apiData.Make;
    instance.make_id = apiData.MakeID;
    instance.manufacturer = apiData.Manufacturer;
    instance.manufacturer_id = apiData.ManufacturerId;
    instance.model = apiData.Model;
    instance.model_id = apiData.ModelID;
    instance.model_year = apiData.ModelYear;
  }

  async create(
    isUpdate: boolean,
    vehicleIdentificationCodeInstance: VehicleIdentificationCode,
  ): Promise<VehicleIdentificationCode | Error> {
    const result = await this.getVINDecodedInfo(vehicleIdentificationCodeInstance.code);

    if (result instanceof Error) {
      return result as Error;
    }

    if (result.Results?.[0] === undefined) {
      errorLogger("result[0] is undefined");
      return new Error("user error: invalid VIN");
    }

    if (result.Results?.[0]?.AdditionalErrorText !== "") {
      errorLogger("invalid VIN: ", result.Results?.[0]?.AdditionalErrorText);
      return new Error(`user error: invalid VIN: , ${result.Results?.[0]?.AdditionalErrorText}`);
    }

    this.vehicleIdentificationCodeInstanceDataMassage(result.Results?.[0], vehicleIdentificationCodeInstance);

    debugLogger("vehicleIdentificationCodeInstance: ", vehicleIdentificationCodeInstance);
    if (isUpdate) {
      return vehicleIdentificationCodeInstance;
    }

    return VehicleIdentificationCode.create(vehicleIdentificationCodeInstance).save();
  }
}
