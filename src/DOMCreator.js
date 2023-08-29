export class DOMCreator {
    constructor() {
        console.log("test")
    }

    addElement(parent, tagName){
        const element = document.createElement(tagName);
        parent.appendChild(element);
    }
}