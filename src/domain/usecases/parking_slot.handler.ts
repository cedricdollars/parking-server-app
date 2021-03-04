import {ParkingSlotRepository} from "../protocols/parkingSlot/parking_slot_repository";
import {Vehicle} from "../entities/vehicle/vehicle";

export class ParkingSlotHandler {

    constructor(private parkingSlotRepository: ParkingSlotRepository) {
    }
   async assignVehicleToPlace(vehicle: Vehicle) {
      await this.parkingSlotRepository.assignVehicle(vehicle)
    }
}