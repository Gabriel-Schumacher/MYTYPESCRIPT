import hljs from 'highlight.js'

const descriptionArea = document.querySelector('.description .text-xl') as HTMLParagraphElement
const codeSampleArea = document.querySelector('.code-sample .text-xl') as HTMLPreElement
const menu = document.querySelector('.menu') as HTMLDivElement

const genericSample01 = {
    title: 'Generic Functions',
    explanation: 
`This reverse function takes an array of any type (as indicated by &lt;T>) and returns an array of the same type. It does not matter if we call this function with an array of strings or an array of numbers. The type of the array that is returned will be the same as the type of the array that is passed in. 
<br><br>
So, the output from calling reverse on the array of fruits will an array of fruits, but in reverse order. The output from calling reverse on the array of numbers will be an array of numbers, but in reverse order.`,
code: 
`<code>function reverse&lt;T>(array: T[]): T[] {
return array.reverse()
}

const stringArray = ['Key Lime', 'cherry', 'lemon']
const reversedStringArray = reverse&lt;string>(stringArray)
console.log(reversedStringArray)

const numberArray = [1342, 2664, 34236]
const reversedNumberArray = reverse&lt;number>(numberArray)
console.log(reversedNumberArray) </code>`
}

const genericSample02 = {
    title: 'Data Storage Class',
    explanation: `This class takes a generic type T. We can create a new instance of this class and pass in a number or a string. The type of the value property will be set to whatever type we pass in.`,
    code: 
`<code> class DataStorage<T> {
    data: T

    constructor(data: T) {
        this.data = data
    }

    getData(): T {
        return this.data
    }
}

const textStorage = new DataStorage<string>('hello world')
console.log(textStorage.getData())

const numberStorage = new DataStorage<number>(1354325345)
console.log(numberStorage.getData()) </code>`
}

const genericSample03 = {
    title: 'Generic Constraints',
    explanation: `This example shows how to use generic constraints. First, we define an interface to indicate that whenever we define a generic type that uses the hasAge interface, we can expect it will have an age prroperty. If not, an exception will be thrown.`,
    code: 
`<code> interface hasAge {
    age: number
}

function getTotalAge<T extends hasAge>(people: T[]): number {
    return people.reduce((total, person) => 
    total + person.age, 0)
}

const people = [
    { name: 'John', age: 30},
    { name: 'Jacob', age: 35},
    { name: 'Jingle', age: 43}
]

const totalAge = getTotalAge<hasAge>(people) </code>`
}

const genericButton01 = document.createElement('button')
genericButton01.classList.add('btn')
genericButton01.classList.add('m-2')
genericButton01.textContent = genericSample01.title

genericButton01.addEventListener('click', () => {
    descriptionArea.innerHTML = genericSample01.explanation
    codeSampleArea.innerHTML = genericSample01.code
    hljs.highlightAll()
})

const genericButton02 = document.createElement('button')
genericButton02.classList.add('btn')
genericButton02.classList.add('m-2')
genericButton02.textContent = genericSample02.title

genericButton02.addEventListener('click', () => {
    descriptionArea.innerHTML = genericSample02.explanation
    codeSampleArea.innerHTML = genericSample02.code
    hljs.highlightAll()
})

const genericButton03 = document.createElement('button')
genericButton03.classList.add('btn')
genericButton03.classList.add('m-2')
genericButton03.textContent = genericSample03.title

genericButton03.addEventListener('click', () => {
    descriptionArea.innerHTML = genericSample03.explanation
    codeSampleArea.innerHTML = genericSample03.code
    hljs.highlightAll()
})


document.addEventListener('DOMContentLoaded', () => {
    menu.appendChild(genericButton01)
    menu.appendChild(genericButton02)
    menu.appendChild(genericButton03)
})


//Generic example01 This reverse function takes an array of any type and returns an array of the same type.

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

const stringArray = ['Key Lime', 'cherry', 'lemon']
const reversedStringArray = reverse<string>(stringArray)
console.log(reversedStringArray)

const numberArray = [1342, 2664, 34236]
const reversedNumberArray = reverse<number>(numberArray)
console.log(reversedNumberArray)

//generic example02 This class takes a generic type T. We can create a new instance of this class and pass in a number or a string. The type of the value property will be set to whatever type we pass in.

class DataStorage<T> {
    data: T

    constructor(data: T) {
        this.data = data
    }

    getData(): T {
        return this.data
    }
}

const textStorage = new DataStorage<string>('hello world')
console.log(textStorage.getData())

const numberStorage = new DataStorage<number>(1354325345)
console.log(numberStorage.getData())

//generic example03 Generic Constraints This example shows how to use generic constraints. First, we define an interface to indicate that whenever we define a generic type that uses the hasAge interface, we can expect it will have an age prroperty. If not, an exception will be thrown.

interface hasAge {
    age: number
}

function getTotalAge<T extends hasAge>(people: T[]): number {
    return people.reduce((total, person) => total + person.age, 0)
}

const people = [
    { name: 'John', age: 30},
    { name: 'Jacob', age: 35},
    { name: 'Jingle', age: 43}
]

const totalAge = getTotalAge<hasAge>(people)
console.log(totalAge)