import curriculum from '../data/curriculum.json'

const blocks = curriculum['responsive-web-design'].blocks

const blocksArray = Object.values(blocks)
const [basicCss, basicHTML, flexbox, grid] = blocksArray

let cssPosition: number = 0
let htmlPosition: number = 0
let flexboxPosition: number = 0
let gridPosition: number = 0

let currentBlock: string

const videoFrame = document.querySelector('#challengeVid')! as HTMLIFrameElement 
const prevButton = document.querySelector('#prevButton')! as HTMLButtonElement
const nextButton = document.querySelector('#nextButton')! as HTMLButtonElement
const challengeVidBtn = document.querySelector('#challengeVidBtn')!
const topMenu = document.querySelector('.menu')!

interface VideoDisplayer {
    videoUrl: string
    display(theFrame: HTMLIFrameElement): void
}

class CodeSnippet implements VideoDisplayer {
    constructor(public title: string, public description: string, public instruction: string, public videoUrl: string) {
    }
    display(theFrame: HTMLIFrameElement): void {
        theFrame.src = this.videoUrl
    }
}

const basicCssSnippets = basicCss.challenges.map((challenge: any) => {
    return new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl)
})

const basicHTMLSnippets = basicHTML.challenges.map((challenge: any) => {
    return new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl)
})

const flexboxSnippets = flexbox.challenges.map((challenge: any) => {
    return new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl)
})

const gridSnippets = grid.challenges.map((challenge: any) => {
    return new CodeSnippet(challenge.title, challenge.description, challenge.instructions, challenge.videoUrl)
})

const populateMenu = (arrayOfBlocks: any[]) => {
    arrayOfBlocks.forEach(block => {
        const menuItem = document.createElement('li')
        const menuLink = document.createElement('a')
        menuLink.textContent = block?.meta?.name

        menuLink.addEventListener('click', () => {
            const allMenuLinks = document.querySelectorAll('.menu li a')
            allMenuLinks.forEach(link => {
                link.classList.remove('active')
            })
            menuLink.classList.add('active')
            currentBlock = block?.meta?.name
        })

        menuItem.appendChild(menuLink)
        topMenu.appendChild(menuItem)
    })
}

populateMenu(blocksArray)

nextButton.addEventListener('click', () => {
        let snippet: CodeSnippet = new CodeSnippet ('', '', '', '')

    if (currentBlock === 'Basic CSS') {
       snippet = basicCssSnippets[cssPosition]
       cssPosition <= basicCssSnippets.length ? cssPosition++ : cssPosition = 0
    }
    if (currentBlock === 'Basic HTML and HTML5') {
        snippet = basicHTMLSnippets[htmlPosition]
        htmlPosition <= basicHTMLSnippets.length ? htmlPosition++ : htmlPosition = 0
    }

     if (currentBlock === 'CSS Flexbox') {
        snippet = flexboxSnippets[flexboxPosition]
        flexboxPosition <= flexboxSnippets.length ? flexboxPosition++ : flexboxPosition = 0
    }

     if (currentBlock === 'CSS Grid') {
        snippet = gridSnippets[gridPosition]
        gridPosition <= gridSnippets.length ? gridPosition++ : gridPosition = 0
    }

     if (snippet.videoUrl && snippet.title) {
        snippet.display(videoFrame)
        challengeVidBtn.textContent = snippet.title
     }
})