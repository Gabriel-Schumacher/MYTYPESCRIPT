"use strict";
// a parameter is a variable passed into a function
function add(num1, num2) {
    return num1 + num2;
}
const numberOne = 29;
const numberTwo = 3.5;
// an argument i sa value (primitive or object) passed as an input
let result = add(numberOne, numberTwo);
console.log(result);
const sportsCar = {
    make: "McLaren",
    model: "720s",
    horsepower: 720,
    style: "coupe",
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
const BMP1 = {
    //make: string
    //model: string,
    //horsepower: number
    //style: string
    //opperators: string[]
    //  role: [number, string]
    //} =
    make: "BMP-1",
    model: "1",
    horsepower: 300,
    style: "IFV",
    opperators: ["Ukraine", "Iraq", "Russia"],
    role: [2, Role.ADMIN]
};
//BMP1.role.push('admin')
//BMP1.role[1] = 10
let currentOperators;
currentOperators = ["Ukraine"];
console.log(BMP1.make);
for (const country of BMP1.opperators) {
    console.log(country.toUpperCase());
}
console.log("My car is", sportsCar, BMP1);
