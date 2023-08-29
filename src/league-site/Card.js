import {DOM} from "../utility/DOM";
export class Card extends DOM {
    // we inherit from DOM class, which means this class has all its methods too
    constructor(data, DOM) {
        // the DOM constructor is run when constructing a DOM class
        super();

        // we assign the card data to the Card object, we also assign the DOM
        this.data = data;

        // add the card DOM
        this.DOM = this.addElement(DOM, "div");
    }

}