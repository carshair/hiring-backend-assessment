import "reflect-metadata";

import * as Loaders from "./loaders";

const init = async () => {
  await Promise.all([Object.values(Loaders)]);
  console.log(
    `[server] ${process.env.NODE_ENV} API Server is running on port: ${process.env.PORT}`,
  );
}

init();