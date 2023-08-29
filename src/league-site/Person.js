import {DOM} from "../utility/DOM";

export class Person extends DOM {

    constructor(data, container){
        super();

        // add the person DOM
        this.DOM = this.addElement(container, "div");

        this.data = data;

        this.DOM.id = data.name



    }
}