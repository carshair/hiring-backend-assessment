import { ChildEntity } from "typeorm";
import { Vehicle } from "./vehicle";

@ChildEntity()
export class Car extends Vehicle {}
