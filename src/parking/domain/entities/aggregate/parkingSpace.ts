import {PlaceType} from "./placeType";

export class ParkingSpace {
    private no_place: number
    private occupied: boolean
    private placeType: PlaceType

    constructor(no_place: number, occupied: boolean, placeType: PlaceType) {
        this.no_place = no_place
        this.occupied = occupied
        this.placeType = placeType
    }

}