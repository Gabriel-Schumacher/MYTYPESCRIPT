export const functionParamsExample = () => {

    return {
      title: `Data types can be set on function parameters`,
      explanation: `This is the syntax when indicating the data type of a function parameter. After the parameter name add a colon (:), a space and then the data type you expect. Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')`,
      code: `<pre data-prefix="1"><code>function add(num1; number, num2: number) {</code></pre>

        <pre data-prefix="2"><code>  return num1 + num2</code></pre> 
        <pre data-prefix="3"><code>}</code></pre>`
    }

}

export const objectTypesExample = () => {
  return {
    title: ``,
    explanation: ``,
    code:``
  }
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

