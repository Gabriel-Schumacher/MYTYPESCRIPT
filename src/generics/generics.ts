function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30})
console.log(mergeObj)

// This reverse function takes an array of any type and returns an array of the same type.

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

const stringArray = 