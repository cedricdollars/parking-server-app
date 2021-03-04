import {VehicleType} from "../enums/vehicle_type";

export class Vehicle {
   private type: VehicleType

    constructor(type:VehicleType) {
       this.type = type
    }
    public getType(){
       return this.type
    }

}