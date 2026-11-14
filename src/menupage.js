import { loadEmptyContentDiv } from "./loadAssistant.js";
import { createParagraph } from "./paragraphCreatorAssistant.js";

export function loadMenuPage() {
    const contentDiv = loadEmptyContentDiv();

    contentDiv.classList.add("menu-active");

    const title = document.createElement("h1");
    title.textContent = "Menu";
    title.classList.add("menu-title");
    contentDiv.append(title);

    const foodTypePasta = document.createElement("h2");
    foodTypePasta.textContent = "Pasta";
    foodTypePasta.classList.add("food-type-title");
    const dolorP = createParagraph("Dolor Rhoncus Et");
    const arcuP = createParagraph("Arcu a Tincidunt");

    const foodTypePizza = document.createElement("h2");
    foodTypePizza.textContent = "Pizza";
    foodTypePizza.classList.add("food-type-title");
    const suspendisseP = createParagraph("Suspendisse Pretium");
    const erosP = createParagraph("Eros a Fermentum");

    const foodTypeDessert = document.createElement("h2");
    foodTypeDessert.textContent = "Desserts";
    foodTypeDessert.classList.add("food-type-title");
    const praesentP = createParagraph("Praesent Commodo");
    const donecP = createParagraph("Donec Ullamcorper");

    const foodElementsContainer = document.createElement("div");
    foodElementsContainer.classList.add("food-elements");

    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        div.className = "food-type";
        foodElementsContainer.append(div);
    }

    const divs = foodElementsContainer.querySelectorAll(".food-type");
    divs[0].append(foodTypePasta, dolorP, arcuP);
    divs[1].append(foodTypePizza, suspendisseP, erosP);
    divs[2].append(foodTypeDessert, praesentP, donecP);

    contentDiv.append(foodElementsContainer);
}
