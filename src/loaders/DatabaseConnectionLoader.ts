import { DataSource } from "typeorm";
import { Vehicle, VehicleIdentificationCode } from "../api/models/";

export async function DatabaseConnectionLoader() {
  const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_HOST_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Vehicle, VehicleIdentificationCode],
    migrations: ["src/migration/**/*.ts"],
    synchronize: true,
    logging: true,
  });
  AppDataSource.initialize()
    .then(() => {
      console.log("[database] connected", process.env.TYPEORM_DATABASE);
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
}