class MercedesCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");   
    }

    stop() {
        console.log()
    }
    // setBrand(brand) {
    //     this.brandName = brand;
    // }
}

let  Maybach = new MercedesCar("Maybach" , 10);
console.log(Maybach);
//Maybach.setBrand("Maybach");