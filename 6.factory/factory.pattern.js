///create service Car
class Car {
    constructor({
        name = "Ford Ranger 2023",
        doors = 4,
        price = "10 VND",
        customerInfo = {},
    }) {
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfo = customerInfo;
    }
}

//create service Logistics
class ServiceLogistics {
    transportClass = Car;
    getTransport = (customerInfo) => {
        return new this.transportClass(customerInfo);
    };
}

//order for customer by Car
const carService = new ServiceLogistics();
// console.log(
//     "CarService",
//     carService.getTransport({
//         customerInfo: { name: "Ben", cargoVolume: "100kg" },
//     })
// );

//cach 1
class Truck {
    constructor({
        name = "Truck Thaco",
        doors = 2,
        price = "1000 VND",
        customerInfo = {},
    }) {
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfo = customerInfo;
    }
}

carService.transportClass = Truck;
console.log(
    "Truck Service",
    carService.getTransport({
        customerInfo: { name: "Ben", cargoVolume: "1000kg" },
    })
);

//cach 2

class TruckService extends ServiceLogistics {
    transportClass = Truck;
}

const truckService = new TruckService();
console.log(
    "TruckService::Class",
    truckService.getTransport({
        customerInfo: { name: "Ben", cargoVolume: "1000kg" },
    })
);
