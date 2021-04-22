import {ParkingSpace} from "../aggregate/parkingSpace";
import {PlaceDTO} from "../dto/placeDTO";


export class ParkingArea {
    private readonly _places:Array<ParkingSpace>

    constructor(places: Array<ParkingSpace>) {
        this._places = places
    }

    async getParkingPlaces():Promise<Array<PlaceDTO>> {
        return []
    }
}