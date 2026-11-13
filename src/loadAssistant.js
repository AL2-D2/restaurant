function getContentDiv() {
    return document.querySelector("#content");
}
function deleteChildElementsFrom(element) {

    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}
export function loadEmptyContentDiv() {
    const contentDiv = getContentDiv();
    deleteChildElementsFrom(contentDiv);
    return contentDiv;
}