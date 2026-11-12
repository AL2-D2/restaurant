import restaurantBackground from "./assets/images/restaurant-background-image.jpg";
const contentContainer = document.querySelector("#content");
export function loadHomePage(){
    const h1 = document.createElement("h1");
    h1.innerText = "Welcome to Lorem Ipsum Restaurant";

    const image = document.createElement("img");
    image.src = restaurantBackground;
    image.width = "500";
    image.height = "350";
    image.style = "border-radius: 15px;";

    const firstParagraph = document.createElement("p");
    firstParagraph.innerText = "Enjoy delicious, freshly prepared Praesent Maximus food in a warm and welcoming atmosphere.";    

    const secondParagraph = document.createElement("p");
    secondParagraph.innerText = "Come hungry, leave happy!";

    contentContainer.append(h1, image, firstParagraph, secondParagraph);
}