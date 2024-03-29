import curriculum from "../data/curriculum.json";

const blocks = curriculum["responsive-web-design"].blocks;

//console.log('Blocks', blocks)

const blocksArray = Object.values(blocks);

//console.log('Blocks Array', blocksArray)

//console.log(blocksArray[0].meta.name)

const navBar = document.querySelector(".navbar")!;
const navList = document.querySelector("#navList")!;

const buildNavFromJSON = (blockName: string) => {
  const navItem = document.createElement("a");
  navItem.classList.add("btn", "btn-ghost", "normal-case", "text-xl", "mx-4");
  navItem.textContent = blockName;
  navItem.addEventListener("click", () => {
    const foundBlock = blocksArray.find(
      (item: any) => item.meta.name === blockName
    );
    console.log(foundBlock);
    buildLeftNavFromJSON(foundBlock);
  });
  navBar.appendChild(navItem);
};

blocksArray.forEach((block) => {
  buildNavFromJSON(block.meta.name);
});

const buildLeftNavFromJSON = (block: any) => {
  while (navList.firstChild) {
    navList.removeChild(navList.firstChild);
  }
  block.challenges.forEach((challenge: any) => {
    //console.log(chanllenge)
    const listItem = document.createElement("li");
    listItem.classList.add("my-4");
    const navButton = document.createElement("h3");
    navButton.classList.add(
      "w-65",
      "bg-blue-200",
      "rounded",
      "p-2",
      "text-xl",
      "text-center",
      "cursor-pointer",
      "hover:bg-blue-300",
      "hover:text-white",
      "shadow-medium"
    );
    navButton.textContent = challenge.title;
    listItem.addEventListener("click", () => {
      buildSnippetDisplay(challenge);
    });
    listItem.appendChild(navButton);
    navList.appendChild(listItem);
  });
};

class ExampleCodeSnippet {
  constructor(
    public title: string,
    public description: string,
    public instructions: string
  ) {}
}

const buildSnippetDisplay = (challenge: any) => {
  const snippet = new ExampleCodeSnippet(
    challenge.title,
    challenge.description,
    challenge.instructions
  );
  console.log(snippet);
  const snippetDisplay = document.querySelector("#snippetDisplay")!;
  while (snippetDisplay.firstChild) {
    snippetDisplay.removeChild(snippetDisplay.firstChild);
  }
  const snippetTitle = document.createElement("h2");
  snippetTitle.classList.add("text-2xl", "font-bold", "m-4");
  snippetTitle.textContent = snippet.title;

  const snippetDescription = document.createElement("p")
  snippetDescription.classList.add("m-4")
  //snippetDescription.textContent = snippet.description
  snippetDescription.innerHTML = snippet.description

  const snippetInstructions = document.createElement("p")
  snippetInstructions.classList.add("m-4")
  //snippetInstructions.textContent = snippet.instructions
  snippetInstructions.innerHTML = snippet.instructions
 

  snippetDisplay.appendChild(snippetTitle);
  snippetDisplay.appendChild(snippetDescription);
  snippetDisplay.appendChild(snippetInstructions);

};
