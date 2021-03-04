import {ParkingSlot} from "../parkingSlot/parking_slot";

export class ParkingFloor {

    private _parking_slot: ParkingSlot[]=[]

    get parking_slot(): ParkingSlot[] {
        return this._parking_slot;
    }

    set parking_slot(value: ParkingSlot[]) {
        this._parking_slot = value;
    }
}