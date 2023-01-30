import { ExpressErrorMiddlewareInterface, HttpError, Middleware } from "routing-controllers";

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any) {
    if (error instanceof HttpError) {
      response.status(error.httpCode).json(error);
    }
  }
}