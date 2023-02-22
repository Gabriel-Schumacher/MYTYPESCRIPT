"use strict";
const funcParamsButton = document.querySelector('#funcParams');
const cardTitle = document.querySelector('.card-title');
funcParamsButton === null || funcParamsButton === void 0 ? void 0 : funcParamsButton.addEventListener('click', showExample);
function showExample() {
    console.log('About to show example...');
    //cardTitle?.textContent= 'function add(num1: number, num2: number)'
}
// a parameter is a variable passed into a function
function add(num1, num2) {
    return num1 + num2;
}
const numberOne = 29;
const numberTwo = 3.5;
// an argument i sa value (primitive or object) passed as an input
let result = add(numberOne, numberTwo);
console.log(result);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["DEV"] = 1] = "DEV";
    Role[Role["STUDENT"] = 2] = "STUDENT";
})(Role || (Role = {}));
const sportsCar = {
    make: "McLaren",
    model: "720s",
    horsepower: 720,
    style: "coupe",
    isFast: true,
    colors: ['red', 'blue', 'silver'],
    driver: [1, "McLaren"],
    role: Role.ADMIN
};