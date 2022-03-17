import { Connection, createConnection } from "typeorm";

export async function DatabaseConnectionLoader (
): Promise<Connection> {
  const connection: Connection = await createConnection();
  console.log("[database] connected", connection.name);

  return connection;
}
