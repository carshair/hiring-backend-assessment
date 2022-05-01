import { Application } from "express";
import { createExpressServer } from "routing-controllers";

import * as Controllers from "../api/controllers";

export function ExpressServerLoader(): Application {
  const expressApp: Application = createExpressServer({
    cors: true,
    classTransformer: true,
    defaultErrorHandler: false,
    routePrefix: "/api/v1",
    middlewares: [],
    controllers: Object.values(Controllers),
  });

  expressApp.listen(process.env.PORT);

  return expressApp;
}
