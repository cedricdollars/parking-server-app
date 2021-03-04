import {ParkingSlotType} from "../enums/parking_slot_type";

export interface ParkingSlot {
    number_slot: number
    free: boolean
    parkingSlotType:ParkingSlotType
}