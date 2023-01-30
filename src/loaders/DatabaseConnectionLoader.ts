import { Connection, createConnection } from "typeorm";

export async function DatabaseConnectionLoader() {
  try {
    const connection: Connection = await createConnection();
    console.log("[database] connected", connection.name);
  } catch (error) {
    console.log("[database] not connected", error);
  }
}
