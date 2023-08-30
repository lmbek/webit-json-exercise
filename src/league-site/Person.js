import {DOM} from "../utility/DOM";

export class Person extends DOM {

    constructor(data, container){
        super();

        // add the person DOM
        this.DOM = this.addElement(container, "div");

        this.data = data;

        this.DOM.id = data.name+"-person";

        
        this.DOM.style.height ="500px";

        this.addProfileName();



    }

    addProfileName(){
        const profileName = this.addElement(this.DOM,"h1");
        profileName.innerText = this.data.name;
        profileName.style.color = "white";
        profileName.style.textAlign = "center";
        profileName.style.fontSize =" 2rem";

    }
}