import hljs from 'highlight.js'

const descriptionArea = document.querySelector('.description .text-xl') as HTMLParagraphElement
const codeSampleArea = document.querySelector('.code-sample .text-xl') as HTMLPreElement
const keyboard = document.querySelector('.keyboard') as HTMLDivElement

const genericSample01 = {
    title: 'Generic Functions',
    explanation: `This reverse function takes an array of any type (as indicated by &lt;T>) and returns an array of the same type. It does not matter if we call this function with an array of strings or an array of numbers. The type of the array that is returned will be the same as the type of the array that is passed in. 
    <br><br>
    So, the output from calling reverse on the array of fruits will an array of fruits, but in reverse order. The output from calling reverse on the array of numbers will be an array of numbers, but in reverse order.`,
    code: `<code> function reverse&lt;T>(array: T[]): T[] {
    return array.reverse()
    }
    
    const stringArray = ['Key Lime', 'cherry', 'lemon']
    const reversedStringArray = reverse&lt;string>(stringArray)
    console.log(reversedStringArray)
    
    const numberArray = [1342, 2664, 34236]
    const reversedNumberArray = reverse&lt;number>(numberArray)
    console.log(reversedNumberArray) </code>`
}

const genericButton01 = document.createElement('button')
genericButton01.classList.add('btn')
genericButton01.textContent = genericSample01.title

genericButton01.addEventListener('click', () => {
    descriptionArea.innerHTML = genericSample01.explanation
    codeSampleArea.innerHTML = genericSample01.code
    hljs.highlightAll()
})

//make two more buttons

document.addEventListener('DOMContentLoaded', () => {
    keyboard.appendChild(genericButton01)
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

//generic example02

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