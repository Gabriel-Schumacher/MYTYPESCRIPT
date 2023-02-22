import { functionParamsExample } from "./basicTypes"
import { objectTypesExample } from "./basicTypes"
import { functionReturnTypesExample } from "./basicTypes"
import { functionAsTypesExample } from "./basicTypes"
import { arrayTupleEnumExample } from "./basicTypes"
import { unionLiteralExample } from "./basicTypes"
import { functionTypesExample } from "./basicTypes"

const funcParamsButton = document.querySelector('#funcParams')!
const objectTypesButton = document.querySelector('#objectTypes')!
const funcReturnButton  = document.querySelector('#funcReturnTypes')!
const funcAsTypesButton  = document.querySelector('#funcAsType')!
const arrayTupleEnumButton = document.querySelector('#ArrayTupleEnum')!
const unionLiteralButton = document.querySelector('#UnionLiteral')!
const funcTypeButton = document.querySelector('#funcType')!


//const codeExample = document.querySelector('#code-example')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#card-content')!
const codeContent = document.querySelector('#code-content')!

funcParamsButton.addEventListener('click', loadExample.bind(null, functionParamsExample))
objectTypesButton.addEventListener('click', loadExample.bind(null, objectTypesExample))
funcReturnButton.addEventListener('click', loadExample.bind(null, functionReturnTypesExample))
funcAsTypesButton.addEventListener('click', loadExample.bind(null, functionAsTypesExample))
arrayTupleEnumButton.addEventListener('click', loadExample.bind(null, arrayTupleEnumExample))
unionLiteralButton.addEventListener('click', loadExample.bind(null, unionLiteralExample))
funcTypeButton.addEventListener('click', loadExample.bind(null, functionTypesExample))


//function showFuncParamsExample() {
  //  const { title, explanation, code } = functionParamsExample()
  //  cardTitle.textContent = title 
  //  cardContent.textContent = explanation
  //  codeContent.innerHTML = code
//}

//function showObjectTypesExample() {
  //  const { title, explanation, code } = objectTypesExample()
  //  cardTitle.textContent = title 
  //  cardContent.textContent = explanation
 //   codeContent.innerHTML = code
//}

function loadExample(functionExample: () =>  { title: string, 
    explanation: string, code: string }) {
    const { title, explanation, code } = functionExample()
    cardTitle.textContent = title 
    cardContent.textContent = explanation
    codeContent.innerHTML = code
}