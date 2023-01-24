// a parameter is a variable passed into a function
function add(num1: number, num2: number) {
    return num1 + num2
}

const numberOne = 29
const numberTwo = 3.5

// an argument i sa value (primitive or object) passed as an input

let result = add(numberOne, numberTwo)
console.log(result)

const sportsCar = {
    make: "McLaren",
    model: "720s",
    horsepower: 720,
    style: "coupe",
}

console.log("My car is", sportsCar)