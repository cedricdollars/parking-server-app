import {QueryParkingRepository} from "../../domain/usecases/queries/repository/queryParkingRepository";
import {PlaceDTO} from "../../domain/entities/dto/placeDTO";

export class ParkingQueryRepositoryImpl implements QueryParkingRepository {
    getParkingSpaces(): Promise<PlaceDTO[]> {
        return Promise.resolve([]);
    }

}