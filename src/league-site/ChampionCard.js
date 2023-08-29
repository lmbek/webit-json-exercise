import {Card} from "./Card";
import {DOM} from "../utility/DOM";

export class ChampionCard extends DOM {
    constructor(data, DOM) {
        super();
        this.data = data;
        // add HTML
        this.DOM = document.createElement("div");
        this.DOM.id = data.name;
        DOM.appendChild(this.DOM);
        console.log(this.DOM);
        // add CSS
        this.DOM.style.backgroundImage ="url("+data.img+")";
        this.DOM.style.height ="500px";

        this.addHeadline();
        this.addParagraf();
        
    }
    addHeadline (){
        const headline = this.addElement(this.DOM,"h1");
        headline.innerText = this.data.name;
        headline.style.color = "white";
        headline.style.textAlign = "center";
        headline.style.fontSize =" 2.5rem";
    }

    addParagraf(){
        const paragraf = this.addElement(this.DOM, "p");
        paragraf.innerText = this.data.text;
        paragraf.style.color =" white";
        paragraf.style.textAlign = "center";
        paragraf.style.fontSize =" 2.5rem";

    }
}