const createCar = (make, model, year = "unknow") => {
    return { make, model, year};
};
const car = createCar("4x4", "Corolla");
console.log(car);