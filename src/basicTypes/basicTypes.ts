

const funcParamsButton = document.querySelector('#funcParams')
const cardTitle = document.querySelector('.card-title')

funcParamsButton?.addEventListener('click', showExample)

function showExample() {
    console.log('About to show example...')
    //cardTitle?.textContent= 'function add(num1: number, num2: number)'
}

// a parameter is a variable passed into a function
function add(num1: number, num2: number) {
  return num1 + num2;
}

const numberOne = 29;
const numberTwo = 3.5;

// an argument i sa value (primitive or object) passed as an input

let result = add(numberOne, numberTwo);
console.log(result);

enum Role {ADMIN, DEV, STUDENT}

const sportsCar: { 
    make: string; 
    model: string;
    horsepower: number;
    style: string;
    isFast: boolean;
    colors: string[];
    driver: [1, string];
    role: Role;
} = {
  make: "McLaren",
  model: "720s",
  horsepower: 720,
  style: "coupe",
  isFast: true,
  colors: ['red', 'blue', 'silver'],
  driver: [1, "McLaren"],
  role: Role.ADMIN
};
