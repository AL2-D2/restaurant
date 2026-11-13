import { loadEmptyContentDiv } from "./loadAssistant.js";
export function loadContactPage() {
    const contentDiv = loadEmptyContentDiv();

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
    const chefDiv = document.createElement("div");

    managerDiv.append(managerTitle, managerNumber, managerMail);
    chefDiv.append(chefTitle, chefNumber, chefMail);

    contentDiv.append(managerDiv, chefDiv);
}