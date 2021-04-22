import {QueryParkingRepository} from "../../domain/usecases/queries/repository/queryParkingRepository";
import {PlaceDTO} from "../../domain/entities/dto/placeDTO";
import {MysqlConnection} from "./helper/mysqlConnection";

export class ParkingQueryRepositoryImpl implements QueryParkingRepository {
    private datasource: MysqlConnection

    constructor(datasource: MysqlConnection) {
        this.datasource = datasource
    }
    getParkingSpaces(): Promise<PlaceDTO[]> {
        return this.datasource.fetch("SELECT * FROM parking_space")
    }

}