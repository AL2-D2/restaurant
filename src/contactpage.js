import { loadEmptyContentDiv } from "./loadAssistant.js";
export function loadContactPage() {
    const contentDiv = loadEmptyContentDiv();
    contentDiv.classList.add("contactpage-active");

    const managerTitle = document.createElement("h3");
    managerTitle.textContent = "Manager";
    const managerNumber = document.createElement("p");
    managerNumber.textContent = "555-555-5554";
    const managerMail = document.createElement("p");
    managerMail.textContent = "cursus_ante@gmail.com";

    const chefTitle = document.createElement("h3");
    chefTitle.textContent = "Chef";
    const chefNumber = document.createElement("p");
    chefNumber.textContent = "555-555-5555";
    const chefMail = document.createElement("p");
    chefMail.textContent = "donec_tempus@gmail.com";

    const managerDiv = document.createElement("div");
    managerDiv.classList.add("contact-container");
    const chefDiv = document.createElement("div");
    chefDiv.classList.add("contact-container");

    managerDiv.append(managerTitle, managerNumber, managerMail);
    chefDiv.append(chefTitle, chefNumber, chefMail);

    contentDiv.append(managerDiv, chefDiv);
}