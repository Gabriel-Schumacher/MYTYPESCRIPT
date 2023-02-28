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

let codeSnippet1 = new ExampleCodeSnippet(`How to define a class`, `Here is where I explain how to define class`, `<pre><code><h1>Hello</h1></code></pre>`)


console.log(codeSnippet1.getTitle())
console.log(codeSnippet1.getExplanation())

console.log(Math.random())