import { Action, InterceptorInterface } from "routing-controllers";

export class CarInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    if (content) return { httpCode: 200, content };
    else return { httpCode: 204, message: "Car not found" };
  }
}