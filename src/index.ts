import { functionParamsExample } from "./basicTypes"
import { objectTypesExample } from "./basicTypes"

const funcParamsButton = document.querySelector('#funcParams')!
const objectTypesButton = document.querySelector('#objectTypes')!
//const codeExample = document.querySelector('#code-example')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#card-content')!
const codeContent = document.querySelector('#code-content')!

funcParamsButton.addEventListener('click', showFuncParamsExample)
objectTypesButton.addEventListener('click', showObjectTypesExample)

function showFuncParamsExample() {
    cardTitle.textContent = functionParamsExample().title // chaining example
    const { explanation, code } = functionParamsExample()
    cardContent.textContent = explanation
    codeContent.innerHTML = code
}

function showObjectTypesExample() {
    cardTitle.textContent = objectTypesExample().title // chaining example
    const { explanation, code } = objectTypesExample()
    cardContent.textContent = explanation
    codeContent.innerHTML = code
}