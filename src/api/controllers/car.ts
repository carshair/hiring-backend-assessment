import { JsonController, UseInterceptor } from "routing-controllers";

import { CarInterceptor } from "../interceptors";

@JsonController("/car")
@UseInterceptor(CarInterceptor)
export class CarController {}
