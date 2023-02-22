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
    title: `Object data type with all properties set`,
    explanation: `TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.`,
    code:`<pre data-prefix="1"><code> enum Role {ADMIN, DEV, STUDENT}</code></pre>
          <pre data-prefix="2"><code></code></pre>
          <pre data-prefix="3"><code>const sportsCar: {</code></pre>
          <pre data-prefix="4"><code> make: string</code></pre>
          <pre data-prefix="5"><code> model: string</code></pre>
          <pre data-prefix="6"><code> horsepower: number</code></pre>
          <pre data-prefix="7"><code> stype: string</code></pre>
          <pre data-prefix="8"><code> isFast: boolean</code></pre>
          <pre data-prefix="9"><code> colors: string</code></pre>
          <pre data-prefix="10"><code> driver: [number, string]</code></pre>
          <pre data-prefix="11"><code> role: Role</code></pre>
          <pre data-prefix="12"><code> } = </code></pre>
          <pre data-prefix="13"><code> make: 'McLaren',</code></pre>
          <pre data-prefix="14"><code> model: '720s',</code></pre>
          <pre data-prefix="15"><code> horsepower: 720,</code></pre>
          <pre data-prefix="16"><code> style: 'coupe',</code></pre>
          <pre data-prefix="17"><code> isFast: true,</code></pre>
          <pre data-prefix="18"><code> colors: ['red', 'blue', 'silver']</code></pre>
          <pre data-prefix="19"><code> driver: [1, 'McLaren']</code></pre>
          <pre data-prefix="20"><code> role: Role.ADMIN,</code></pre>
          <pre data-prefix="21"><code> }</code></pre> `
  }
}

export const functionReturnTypesExample = () => {
  return {
    title: `Typescript will infer types`,
    explanation: `This function has the return type, which can be inferred by typescript. The value of the return type can be assigned by adding a colon (:) and the type after.`,
    code:`<pre data-prefix="1">Infer the return type</code></pre>
    <pre data-prefix="1">function add1(n1: number, n2: number) {</code></pre>
    <pre data-prefix="2">  return n1 + n2</code></pre>
    <pre data-prefix="3">}</code></pre>
    <pre data-prefix="4"><code> <!--Space--> </code></pre>
    <pre data-prefix="5">function add2(n1: number, n2: number) {</code></pre>
    <pre data-prefix="6">  return n1.toString() + n2.toString()</code></pre>
    <pre data-prefix="7">}</code></pre>
    <pre data-prefix="8"><code> <!--Space--> </code></pre>
    <pre data-prefix="9"><code>//Assign the return type </code></pre>
    <pre data-prefix="10">function add1(n1: number, n2: number): number {</code></pre>
    <pre data-prefix="11">  return n1 + n2</code></pre>
    <pre data-prefix="12">}</code></pre>`

  }
}

export const functionAsTypesExample = () => {
  return {
    title: `Types that describe a function, regarding the parameters and value of the function.`,
    explanation: `A function type is create with arrow notion () => with the return type specified after. Inside the function you add parameters for the types used.`,
    code:`<pre data-prefix="1"><code>//Example Function</code></pre>
    <pre data-prefix="2"><code>function add(num1: number, num2: number) {</code></pre>
    <pre data-prefix="3"><code>   return num1 + num2;</code></pre>
    <pre data-prefix="4"><code>}</code></pre>
    <pre data-prefix="5"><code><!--Space--></code></pre>
    <pre data-prefix="6"><code>//Function as Type:</code></pre>
    <pre data-prefix="7"><code>let combineValues: (a:number, b:number) => number</code></pre>
    <pre data-prefix="8"><code><!--Space--></code></pre>
    <pre data-prefix="9"><code>combineValues = add</code></pre>
    <pre data-prefix="10"><code>console.log(combineValues(8, 8))</code></pre>`

  }
}

export const arrayTupleEnumExample = () => {
  return {
    title: `Different value types.`,
    explanation: `Arrays, Tuples and Enums are all different ways to store data.`,
    code:`<pre data-prefix="1">//Arrays stores multiple values, which can be different.</code></pre> 
      <pre data-prefix="2"><!-- Space --></code></pre>
      <pre data-prefix="3">const person1 = {</code></pre>
      <pre data-prefix="4">name: 'Gabriel',</code></pre>
      <pre data-prefix="5">age: 24,</code></pre>
      <pre data-prefix="6">hobbies: ['Coding', 'Cooking'], //Array data</code></pre>
      <pre data-prefix="7">}</code></pre>
      <pre data-prefix="8"> <!-- Space --></code></pre>
      <pre data-prefix="9">//A Tuple is fixed lengthed array, with fixed types.</code></pre>
      <pre data-prefix="10"><!-- Space --></code></pre>
      <pre data-prefix="11">const person2: {</code></pre>
      <pre data-prefix="12"> name: string;</code></pre>
      <pre data-prefix="13">age: number;</code></pre>
      <pre data-prefix="14">hobbies: string[];</code></pre>
      <pre data-prefix="15">role: [number, string]; //Assigning tuple parameters</code></pre>
      <pre data-prefix="16">} = {</code></pre>
      <pre data-prefix="17"> name: 'Gabriel',</code></pre>
      <pre data-prefix="18">age: 24,</code></pre>
      <pre data-prefix="19">hobbies: ['Coding', 'Cooking'],</code></pre>
      <pre data-prefix="20">role: [2, 'author']</code></pre>
      <pre data-prefix="21">}</code></pre>
      <pre data-prefix="22"><!-- Space --></code></pre>
      <pre data-prefix="23">//Enums allow the definition of set of named global constants</code></pre>
      <pre data-prefix="24"><!-- Space --></code></pre>
      <pre data-prefix="25">enum Role { ADMIN, READ_ONLY, AUTHOR }</code></pre>
      <pre data-prefix="26"><!-- Space --></code></pre>
      <pre data-prefix="27">const person3 = {</code></pre>
      <pre data-prefix="28">name: 'Gabriel',</code></pre>
      <pre data-prefix="29">age: 24,</code></pre>
      <pre data-prefix="30">hobbies: ['Coding', 'Cooking'],</code></pre>
      <pre data-prefix="31">role: Role.ADMIN //Using the enum type</code></pre>
      <pre data-prefix="32">}</code></pre>`

  }
}

export const unionLiteralExample = () => {
  return {
    title: `Values with more than a single type`,
    explanation: `A union type describes a value that can be one of several types. We use the pipe ( | ) to separate each type, so number | string | boolean is the type of a value that can be a number , a string , or a boolean.  By using literal types you can allow an exact value which a string, number, or boolean must have.`,
    code:`<pre data-prefix="1"><code>//Union Type</code></pre>
          <pre data-prefix="2"><code>function combine(input1: number | string, input2: number | string) { </code></pre>
          <pre data-prefix="3"><code> let result </code></pre>
          <pre data-prefix="4"><code> if (typeof input1 === 'number' && typeof input2 === 'number') { </code></pre>
          <pre data-prefix="5"><code>    result = input1 + input2 </code></pre>
          <pre data-prefix="6"><code> } else { </code></pre>
          <pre data-prefix="7"><code>    result = input1.toString() + input2.toString()</code></pre>
          <pre data-prefix="8"><code> } </code></pre>
          <pre data-prefix="9"><code> return result</code></pre>
          <pre data-prefix="10"><code>} </code></pre>

          <pre data-prefix="11"><code> </code></pre>
          <pre data-prefix="12"><code>//Literal Type</code></pre>
          <pre data-prefix="13"><code>function combine2(input1: number | string,</code></pre>
          <pre data-prefix="14"><code>   input2: number | string, resultConversion: 'as-number' | 'as-text') {</code></pre>
          <pre data-prefix="15"><code>  let result</code></pre>
          <pre data-prefix="16"><code>  if (typeof input1 === 'number' && typeof input2 === 'number' ||</code></pre>
          <pre data-prefix="17"><code>  resultConversion === 'as-number') {</code></pre>
          <pre data-prefix="18"><code>    result = +input1 + +input2</code></pre>
          <pre data-prefix="19"><code>  } else {</code></pre>
          <pre data-prefix="20"><code>    result = input1.toString() + input2.toString()</code></pre>
          <pre data-prefix="21"><code>  }</code></pre>
          <pre data-prefix="22"><code>  return result</code></pre>
          <pre data-prefix="23"><code>}</code></pre>`
          
  }
}

export const functionTypesExample = () => {
  return {
    title: `Function types have parameters and a return type.`,
    explanation: `In this example the function paremeters accept two numbers. It is also set to return a number by using a colon (:) then stating the return type.`,
    code:`<pre data-prefix="1"><code>function addAndHandle(n1: number, n2: number): number {</code></pre>
          <pre data-prefix="2">return n1 + n2</code></pre>
          <pre data-prefix="3">}</code></pre>`
  }
}

// a parameter is a variable passed into a function


//const numberOne = 29;
//const numberTwo = 3.5;

// an argument i sa value (primitive or object) passed as an input

//let result = add(numberOne, numberTwo);
//console.log(result);

//enum Role {ADMIN, DEV, STUDENT}

const sportsCar: { 
    make: string; 
    model: string;
    horsepower: number;
    style: string;
    isFast: boolean;
    colors: string[];
    driver: [1, string];
    //role: Role;
} = {
  make: "McLaren",
  model: "720s",
  horsepower: 720,
  style: "coupe",
  isFast: true,
  colors: ['red', 'blue', 'silver'],
  driver: [1, "McLaren"],
  //role: Role.ADMIN
};

console.log(sportsCar)

// Example of Function Return Types

function add1(n1: number, n2: number) {
  return n1 + n2
}

function add2(n1: number, n2: number) {
  return n1.toString() + n2.toString()
}

function add3(n1: number, n2: number): number {
  return n1 + n2
}
// Example of Function As Types
//Types that describe a function, regarding the parameters and value of the function.
//A function type is create with arrow notion () => with the return type specified after. Inside the function you add parameters for the types used.

//Example Function
function add(num1: number, num2: number) {
  return num1 + num2;
}

//Function as Type:
let combineValues: (a:number, b:number) => number

combineValues = add
console.log(combineValues(8, 8))

// Example of Array Tuple and Enum Types

//Array 
const person1 = {
  name: 'Gabriel',
  age: 24,
  hobbies: ['Coding', 'Cooking'],
}

//Tuple A fixed lengthed, and fixed typed array.

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //assigning tuple parameters
} = {
  name: 'Gabriel',
  age: 24,
  hobbies: ['Coding', 'Cooking'],
  role: [2, 'author']
}

//Enum using human readable values to store global number values
enum Role { ADMIN, READ_ONLY, AUTHOR }

const person3 = {
  name: 'Gabriel',
  age: 24,
  hobbies: ['Coding', 'Cooking'],
  role: Role.ADMIN
}

// Example of Union Types

function combine(input1: number | string, input2: number | string) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 26)
console.log(combinedAges)

const combinedNames = combine('Gabriel', 'Schumacher')
console.log(combinedNames)

// Example of typescript literal types

function combine2(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number' ||
  resultConversion === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

console.log(combine2(25, 3.5, 'as-number'))
console.log(combine2('25', '3.5', 'as-number'))
console.log(combine2('25', '3.5', 'as-text'))

//Example of Function Types
//Function types have parameters and a return type.
//In this example the function paremeters accept two numbers. It is also set to return a number by using a colon (:) then stating the return type.

function addAndHandle(n1: number, n2: number): number {
  return n1 + n2
}
