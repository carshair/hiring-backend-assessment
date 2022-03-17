import "reflect-metadata";

import * as Loaders from "./loaders";

async function init(): Promise<void> {
  await Loaders.DatabaseConnectionLoader();
  Loaders.ExpressServerLoader();

  console.log(
    `[server] ${process.env.NODE_ENV} API Server is running on port: ${process.env.PORT}`,
  );
}

init();
