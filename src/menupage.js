import { loadEmptyContentDiv } from "./loadAssistant.js";
export function loadMenuPage() {
    const contentDiv = loadEmptyContentDiv();

    const title = document.createElement("h1");
    title.textContent = "Menu";
    contentDiv.append(title);

    const foodTypePasta = document.createElement("h2");
    foodTypePasta.textContent = "Pasta";
    const dolorP = document.createElement("p");
    dolorP.textContent = "Dolor Rhoncus Et - Donec ullamcorper fermentum diam vel maximus.";
    const foodTypePizza = document.createElement("h2");
    foodTypePizza.textContent = "Pizza";
    const suspendisseP = document.createElement("p");
    suspendisseP.textContent = "Suspendisse Pretium - Arcu a tincidunt posuere, vivamus dignissim, eros a fermentum accumsan."
    const foodTypeDessert = document.createElement("h2");
    foodTypeDessert.textContent = "Desserts";
    const praesentP = document.createElement("p");
    praesentP.textContent = "Praesent Commodo - iaculis neque quis aliquam.";

    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        div.className = "food-type";
        contentDiv.append(div);
    }

    const divs = contentDiv.querySelectorAll(".food-type");
    divs[0].append(foodTypePasta, dolorP);
    divs[1].append(foodTypePizza, suspendisseP);
    divs[2].append(foodTypeDessert, praesentP);
}
