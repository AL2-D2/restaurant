import "./style.css";
import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import { loadContactPage } from "./contactpage.js";

loadHomePage();

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");

homeButton.addEventListener("click", loadHomePage);
menuButton.addEventListener("click", loadMenuPage);
contactButton.addEventListener("click", loadContactPage);