import { Application } from "express";
import { createExpressServer } from "routing-controllers";

import * as Controllers from "../api/controllers";
import * as MiddleWares from "../api/middlewares";

export function ExpressServerLoader(): Application {
  const expressApp: Application = createExpressServer({
    cors: true,
    classTransformer: true,
    defaultErrorHandler: false,
    middlewares: Object.values(MiddleWares),
    controllers: Object.values(Controllers),
  });

  expressApp.listen(process.env.PORT);

  return expressApp;
}
