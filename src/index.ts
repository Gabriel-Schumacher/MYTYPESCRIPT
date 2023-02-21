import { functionParamsExample } from "./basicTypes"

const funcParamsButton = document.querySelector('#funcParams')!
const objectTypesButton = document.querySelector('#objectTypes')!
const codeExample = document.querySelector('#code-example')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#card-content')!
const codeContent = document.querySelector('#code-content')!

funcParamsButton.addEventListener('click', showFuncParamsExample)
//objectTypesButton.addEventListener('click', showExample2)

function showFuncParamsExample() {
    //console.log('About to show function params data...')
    //console.log(functionParamsExample())
    cardTitle.textContent = functionParamsExample().title // chaining example
    const { explaination, code } = functionParamsExample()
    cardContent.textContent = explaination
    codeContent.innerHTML = code
}