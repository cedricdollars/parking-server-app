import {PlaceType} from "../aggregate/placeType";

export class PlaceDTO {
    no_place: number
    occupied: boolean
    placeType: PlaceType


    constructor(no_place: number, occupied: boolean, placeType: PlaceType) {
        this.no_place = no_place;
        this.occupied = occupied;
        this.placeType = placeType;
    }
}