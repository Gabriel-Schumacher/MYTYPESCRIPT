import curriculum from '../data/curriculum.json'

const blocks = curriculum['responsive-web-design'].blocks

const blocksArray = Object.values(blocks)

const main = document.querySelector('main')!

interface VideoDisplayer {
    videoUrl: string
    display(theFrame: HTMLIFrameElement): void
}

class CodeSnippet implements VideoDisplayer {
    constructor(public title: string, public description: string, public instruction: string, public videoURL: string) {
    }
    display(theFrame: HTMLIFrameElement): void {
        theFrame.src = this.videoURL
    }
}

const buildSnippetDisplay = (challenge: any) => {
    const snippet = new CodeSnippet(challenge.title, challenge.description, challenge.instruction, challenge.videoURL)

    const displayCard = document.createElement('div')
    displayCard.classList.add('bg-white', 'rounded', 'shadow-md', 'p-4', 'm-4', 'w-1/2')

    const videoFrame = document.createElement('iframe')
}