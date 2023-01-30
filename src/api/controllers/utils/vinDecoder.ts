import axios from "axios";

const URL = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/";
const FORMAT = "json";

export const VinDecoder = async (vin: string) => {
  try {
    const {
      data: { Results },
    } = await axios.get(URL + vin, {
      params: {
        format: FORMAT,
      },
    });
    return Results[0];
  } catch (error) {
    return { status: 400, message: "Error while fetching VIN details" };
  }
};