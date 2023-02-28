import exampleData from '../data/exampleData.json'

const buildUIFromJSON = (dataObj: any) => {
    dataObj.data.forEach((item: any) => {
        console.log(item)
    })
}

buildUIFromJSON(exampleData)

class ExampleCodeSnippet {
    private title: string
    private explanation: string
    private code: string

    constructor(title: string, explanation: string, code: string) {
        this.title = title
        this.explanation = explanation
        this.code = code
    }

    getTitle() {
        return this.title
    }

    getExplanation() {
        return this.explanation
    }

    getCode() {
        return this.code
    }
}

class ExampleCodeSnippetShortcut {
    constructor(private title: string, private explanation: string, private code: string ) {
    }

    getTitle() {
        return this.title
    }

    getExplanation() {
        return this.explanation
    }

    getCode() {
        return this.code
    }
}

let codeSnippet1 = new ExampleCodeSnippet(`How to define a class`, `Here is where I explain how to define class`, `<pre data-prefix="1"><code><h1>Hello</h1></code></pre>`)


console.log(codeSnippet1.getTitle())
console.log(codeSnippet1.getExplanation())

console.log(Math.random())

let simplerCodeSnipppet = new ExampleCodeSnippetShortcut(`How to define a simpler shortcut`, `Here is where I explain how to define a more simple shortcut using the constructor`, `<pre data-prefix="1"><code> Class ExampleCodeSnippet</code></pre>`)

console.log(simplerCodeSnipppet.getTitle)