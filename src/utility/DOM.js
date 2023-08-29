export class DOM {
    DOM = document.body;

    addElement(parent, tagName){
        const element = document.createElement(tagName);
        parent.appendChild(element);
        return element;
    }
}