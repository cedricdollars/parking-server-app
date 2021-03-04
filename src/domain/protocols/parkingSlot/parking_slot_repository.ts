import {Vehicle} from "../../entities/vehicle/vehicle";

export interface ParkingSlotRepository {
    assignVehicle(vehicle: Vehicle):Promise<void>
    removeVehicle():Promise<void>

}
