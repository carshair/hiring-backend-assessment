import { createConnection, getRepository } from "typeorm";

import { Car } from "./../models";
import { CarController } from "../controllers";

import { mockCars, mockCar, mockCarPayload } from "./mockData";

const MOCK_USER_ID = "dd32f3e8-e285-40c6-a4f7-8288d069aaf1";

describe("CarController", () => {
  let carController: CarController;
  let carRepository;

  beforeAll(async () => {
    await createConnection();
  });

  beforeEach(async () => {
    carController = new CarController();
    carRepository = getRepository(Car);
  });

  describe("get", () => {
    it("should return all cars", async () => {
      jest.spyOn(carRepository, "find").mockResolvedValue(mockCars);
      expect(await carController.get()).toBe(mockCars);
    });
  });

  describe("getById", () => {
    it("should return a car by id", async () => {
      jest.spyOn(carRepository, "findOne").mockResolvedValue(mockCar);

      expect(await carController.getById(MOCK_USER_ID)).toBe(mockCar);
    });
  });

  describe("create", () => {
    it("should create a new car", async () => {
      jest.spyOn(carRepository, "save").mockResolvedValue(mockCar);
      expect(await carController.create(mockCarPayload)).toBe(mockCar);
    });
  });

  describe("update", () => {
    it("should update a car by id", async () => {
      jest.spyOn(carRepository, "findOne").mockResolvedValue(mockCar);
      jest.spyOn(carRepository, "save").mockResolvedValue(mockCar);

      expect(
        await carController.update(MOCK_USER_ID, mockCarPayload),
      ).toBe(mockCar);
    });
  });

  describe("delete", () => {
    it("should delete a car by id", async () => {
      jest.spyOn(carRepository, "findOne").mockResolvedValue(mockCar);
      jest.spyOn(carRepository, "remove").mockResolvedValue(mockCar);

      expect(await carController.delete(MOCK_USER_ID)).toBe(mockCar);
    });
  });
});