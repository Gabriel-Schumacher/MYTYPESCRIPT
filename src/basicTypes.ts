

const funcParamsButton = document.querySelector('#funcParams')!
const cardTitle = document.querySelector('.card-title')!

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

const storageHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="dist/output.css"/>
    <script src="/src/index.ts" type="module" defer></script>
</head>
<body>
    <h1 class="text-3xl font-bold underline text-center text-red-800" > Welcome to my typescript page</h1>
    <h2 class="text-blue-600">This is where I show off my Typescript skills</h2>
 <div id="counterDiv"></div>
    
</body>

</html>`