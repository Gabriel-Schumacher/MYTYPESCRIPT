function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30})
console.log(mergeObj)

// This reverse function takes an array of any type and returns an array of the same type.

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

const stringArray = ['Key Lime', 'cherry', 'lemon']
const reversedStringArray = reverse<string>(stringArray)
console.log(reversedStringArray)

const numberArray = [1342, 2664, 34236]
const reversedNumberArray = reverse<number>(numberArray)
console.log(reversedNumberArray)

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