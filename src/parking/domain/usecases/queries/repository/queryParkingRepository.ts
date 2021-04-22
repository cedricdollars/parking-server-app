import {PlaceDTO} from "../../../entities/dto/placeDTO";

export interface QueryParkingRepository {
    getParkingSpaces():Promise<PlaceDTO[]>
}