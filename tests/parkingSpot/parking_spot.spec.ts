import {Vehicle} from "../../src/domain/entities/vehicle/vehicle";
import {VehicleType} from "../../src/domain/entities/enums/vehicle_type";


describe("Park a vehicle", () => {
    let car= VehicleType.CAR
    let motorbike = VehicleType.MOTORBIKE
    it('should be a car', done => {
        const vehicle:Vehicle = new Vehicle(car);
        expect(vehicle.getType()).toEqual(VehicleType.CAR)
        done()
    })
    it('should be a motorbike', done=> {
        const vehicle:Vehicle = new Vehicle(motorbike)
        expect(vehicle.getType()).toEqual(VehicleType.MOTORBIKE)
        done()
    })

})