import { decode } from "../../src/api/services/vin-service";

describe("vin-service tests", () => {
  test("should decode VIN", async () => {
    const vin = "1GPSH73E88H134350";
    const vinInfo = decode(vin);

    expect(vinInfo).toEqual({
      make: "General Motors USA",
      year: 2008,
      model: "SH73E",
    });
  });

  test("should throw an error if company does not exist", () => {
    const ERROR_MESSAGE = "Invalid VIN. Company not found.";
    const vin = "54545ADSADSKJD4F5";

    expect(() => {
      decode(vin);
    }).toThrow(ERROR_MESSAGE);
  });

  test("should return undefined year if year char does not exist", () => {
    const vin = "1GP122223q3344445";

    const result = decode(vin);

    expect(result.year).toBeUndefined();
  });

  test("should return valid year for an old car VIN", ()=>{
    const vin = "1GP122223A3344445";

    const mockDate = new Date(80159530181);
    jest.spyOn(global, "Date")
      .mockImplementation(() => mockDate);
    const result = decode(vin);

    expect(result.year).toEqual(1980);
  });
});
