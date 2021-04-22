import {ParkingArea} from "../../src/parking/domain/entities/aggregateRoot/parkingArea";
import {PlaceDTO} from "../../src/parking/domain/entities/dto/placeDTO";
import {PlaceType} from "../../src/parking/domain/entities/aggregate/placeType";
import {ParkingSpace} from "../../src/parking/domain/entities/aggregate/parkingSpace";


describe("Parking handling", () => {
    it('with an empty place from parking area ', async done => {
        let parkingArea: ParkingArea = new ParkingArea([])
        let places = await parkingArea.getParkingPlaces()
        expect(places).toEqual([])
        done()
    })
    it("with a list of places from parking area", async () => {
        let arrayOfPlaces: Array<ParkingSpace> = [];
        let place1: ParkingSpace = new ParkingSpace(103, false,PlaceType.MOTORBIKE)
        let place2: ParkingSpace = new ParkingSpace(103, false,PlaceType.MOTORBIKE)
        let place3: ParkingSpace = new ParkingSpace(103, false,PlaceType.MOTORBIKE)
        arrayOfPlaces.push(place1)
        arrayOfPlaces.push(place2)
        arrayOfPlaces.push(place3)
        let parkingArea: ParkingArea = new ParkingArea(arrayOfPlaces)
        let result = await parkingArea.getParkingPlaces()
        expect(result).toEqual(arrayOfPlaces)
    })
})